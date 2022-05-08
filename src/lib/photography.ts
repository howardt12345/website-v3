import { firestore } from '@api/firebase';
import { collection, doc, getDoc } from 'firebase/firestore';
import { getAuth, signInAnonymously } from 'firebase/auth';

import { replaceAll } from '@utils';

const url =
  'https://firebasestorage.googleapis.com/v0/b/portfolio-49b69.appspot.com/o/';
const token = 'ea925040-1fca-4eda-b1e8-0eb96567ab7e';
const logHeader = 'photography fromFirestore:';

export class Picture {
  date: any;
  name: any;
  width: number;
  height: number;

  constructor(key: any, value: any) {
    this.date = key;
    this.name = value.split('"')[1];
    this.width = parseInt(value.split(',')[1]);
    this.height = parseInt(value.split(',')[2]);
  }

  getUrl = () =>
    `${url}photo%2F${replaceAll(
      this.name,
      ' ',
      '%20',
    )}?alt=media&token=${token}`;
}

export const fromFirestore = async () => {
  const list: Picture[] = [];

  const auth = getAuth();
  try {
    await signInAnonymously(auth).then(async () => {
      console.log(logHeader, 'logged in');
      const photo = collection(firestore, 'photo');
      const all = doc(photo, 'all');

      await getDoc(all)
        .then((response: { data: () => any }) => {
          const data = response.data();
          const map = data.photos;
          for (const [key, value] of Object.entries(map)) {
            list.push(new Picture(key, value));
          }

          list.sort((a: Picture, b: Picture) => (a.date < b.date ? 1 : -1));

          console.log(logHeader, 'successfully fetched data');
        })
        .catch((error) => {
          console.error(logHeader, error);
        });
    });

    auth.currentUser
      ?.delete()
      .then(() => console.log(logHeader, 'account deleted'));
  } catch (e) {
    console.error(logHeader, e);
    return null;
  }

  return list;
};
