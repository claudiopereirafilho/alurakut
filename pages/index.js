import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/lib/aluraKutCommons";
import { AlurakutStyles} from "../src/lib/aluraKutCommons";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";




function ProfileSidebar(props){
  return(      
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} style={{borderRadius:'8px'}}/>
    </Box>      
  )
}

export default function Home() {
  
  const githubUser = 'claudiopereirafilho';
  const pessoasFavoritas = ['claudiopereirafilho','omariosouto', 'filipedeschamps','peas','felipefialho'];
  
  return (

    <>
      <AlurakutMenu />
      <MainGrid>
        
        <div className="profileArea" style={{ gridArea: 'profileArea'}}>
          <ProfileSidebar githubUser={githubUser}/>
        </div>
        
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea'}}> 
          <Box> 
            <h1 className="title">
              Bem vindo(a)
            </h1>

            <OrkutNostalgicIconSet />

          </Box>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea'}}> 
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da Comunidade ({pessoasFavoritas.length})
            </h2>

           <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`https://github.com/${itemAtual}`} key={itemAtual} target="_blank">
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>                
                    </a>
                  </li>
                )
                })}
            </ul>

          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )    
}
