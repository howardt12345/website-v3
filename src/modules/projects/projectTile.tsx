import { FormattedIcon } from '@components/icons';
import { title } from 'process';
import React from 'react';
import {
  StyledFolder,
  StyledIconLink,
  StyledProject,
  StyledProjectDescription,
  StyledProjectHeader,
  StyledProjectInner,
  StyledProjectLinks,
  StyledProjectName,
  StyledTechList,
} from './projectTile.style';

export const ProjectTile = ({ project }: { project: any }) => {
  const { content, data } = project;
  const { title, github, external, tech } = data;

  return (
    <StyledProject>
      <StyledProjectInner>
        <header>
          <StyledProjectHeader>
            <StyledFolder>
              <FormattedIcon name='Folder' />
            </StyledFolder>
            <StyledProjectLinks>
              {github && (
                <StyledIconLink
                  href={github}
                  target='_blank'
                  rel='nofollow noopener noreferrer'
                  aria-label='GitHub Link'
                >
                  <FormattedIcon name='GitHub' />
                </StyledIconLink>
              )}
              {external && (
                <StyledIconLink
                  href={external}
                  target='_blank'
                  rel='nofollow noopener noreferrer'
                  aria-label='External Link'
                >
                  <FormattedIcon name='External' />
                </StyledIconLink>
              )}
            </StyledProjectLinks>
          </StyledProjectHeader>
          <StyledProjectName>{title}</StyledProjectName>
          <StyledProjectDescription
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </header>
        <footer>
          {tech && (
            <StyledTechList>
              {tech.map((tech: string, i: any) => (
                <li key={i}>{tech}</li>
              ))}
            </StyledTechList>
          )}
        </footer>
      </StyledProjectInner>
    </StyledProject>
  );
};
