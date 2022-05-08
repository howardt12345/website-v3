import React from 'react';
import { SkillsSectionTitle, SkillsContainer, Skill } from './skills.styles';

export const SkillsComponent = ({ frontMatter }: { frontMatter: any }) => {
  const { technologies, languages, hobbies } = frontMatter;
  return (
    <div>
      {/* Technologies */}
      <div>
        <SkillsSectionTitle>Recent Technologies</SkillsSectionTitle>
        <SkillsContainer>
          {technologies &&
            technologies.map((skill: string, i: any) => (
              <Skill key={i}>{skill}</Skill>
            ))}
        </SkillsContainer>
      </div>
      {/* Languages */}
      <div>
        <SkillsSectionTitle>Languages</SkillsSectionTitle>
        <SkillsContainer>
          {languages &&
            languages.map((skill: string, i: any) => (
              <Skill key={i}>{skill}</Skill>
            ))}
        </SkillsContainer>
      </div>
      {/* Hobbies */}
      <div>
        <SkillsSectionTitle>Hobbies</SkillsSectionTitle>
        <SkillsContainer>
          {hobbies &&
            hobbies.map((skill: string, i: any) => (
              <Skill key={i}>{skill}</Skill>
            ))}
        </SkillsContainer>
      </div>
    </div>
  );
};
