import "./skills.scss"
import {skills} from '../../data/constants';
const Skills = () => {
  return (
    <div>
        <h2>Skills</h2>
        <p>Here are my skills</p>
        <hero>
          {skills.map((skill) => (
            <skills>
              <skilltitle>{skill.title}
              </skilltitle>
              <skilllist>
                {skill.skills.map((item) => (
                  <skillitem>
                    {/* <img src="{skillimage src={item.image}/" alt="" /> */}
                    {/* <skillimage src={item.image} key="id"/> */}
                    {item.name}
                  </skillitem>
                ))}
              </skilllist>
            </skills>
          ))}

        </hero>

    </div>
  )
}

export default Skills