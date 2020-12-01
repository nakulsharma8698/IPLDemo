import React,{useState,useEffect} from 'react';
import './style.css'
import teams from './teams.json'
import players from './players.json'
import matches from './matches.json'
import table from './table.json'



export default class Filter extends React.Component {
    state={
        checkedteams: false,
        checkedplayers:false,
        checkedmatches: false,
        checkedowners:false,
        checkedcaptains:false,
        checkedtable:false
    }
  
      onFilterChangeteams() {
        this.setState({
            checkedteams: !this.state.checkedteams,
          })
          if(!this.state.checkedteams)
          {
            this.setState({
                checkedowners: false,
                checkedcaptains: false
              })
            
          }
      }
      onFilterChangetable() {
        this.setState({
            checkedtable: !this.state.checkedtable
          })
      }
      onFilterChangeowners() {
        this.setState({
            checkedowners: !this.state.checkedowners
          })
      }
      onFilterChangecaptains() {
        this.setState({
            checkedcaptains: !this.state.checkedcaptains
          })
      }
      onFilterChangeplayers() {
        this.setState({
            checkedplayers: !this.state.checkedplayers
          })
      }
      onFilterChangematches() {
        this.setState({
            checkedmatches: !this.state.checkedmatches
          })
      }
      cls(value)
      {
          var str="";
          str+=value;
          return str;
      }

    render()
    {
        
        return(
            <div> 
                <div className="header"> 
                <img className="logo" src={"https://res.cloudinary.com/nakul/image/upload/v1606572070/ipl_vf0kak.jpg"}/>
                </div>
                

                <div className="iplbody">
                <input type="checkbox" className="check" onClick={() => this.onFilterChangeteams()}/>
                <label for="filter1" className="label"> <b>Teams</b></label><br/>
                
                

                {this.state.checkedteams &&(
                    <div> 
                        <hr/>
                        <input type="checkbox" className="check" onClick={() => this.onFilterChangecaptains()}/>
                        <label for="filter1" className="label"> <b>Captains</b></label><br/>
                        <hr/>
                     </div>
                )}


                {this.state.checkedteams &&(
                    <div> 
                         <input type="checkbox" className="check"  onClick={() => this.onFilterChangeowners()}/>
                        <label for="filter1" className="label"> <b>Owners</b></label><br/>
                     </div>
                )}
                 <hr/>
                {this.state.checkedteams &&(
                    <table>
                    <tr>  
                   {teams.map(s => ( <td> <br/><br/><img className="team" src={s.teamimg}/><h4  className={"team"+s.id}>{s.team1}</h4> </td> ) )}
                    
                    </tr>
                    </table>
                )}

                
                {/*<input type="checkbox" className="check" name="filter1" value="teams" onClick={() => this.onFilterChangecaptains("captains")}/>
                <label for="filter1" className="label"> Captains</label><br/>*/}
                {this.state.checkedcaptains && this.state.checkedteams && (
                    <table>
                        <tr>
                    {/*teams.map(s => (<td>{s.captain}</td>))*/}
                    {teams.map(s => (<td><div className="xyz"><img className="cap" src={s.capimg}/><h4 className={"team"+s.id} >{s.captain}</h4></div></td>))}
                    </tr>
                    </table> 
                )}
               
               {this.state.checkedowners && this.state.checkedteams &&(
                    <div>
                    <td>
            {/*<tr>{teams.map(s => (<li><td>{s.owners[0]}</td><td>{s.owners[1]}</td></li>))}</tr>*/}
                    <tr>{teams.map(s => (<td ><img className="owimg" src={s.owimg[0]}/> <h4  className={"team"+s.id}>{s.owners[0]}</h4> </td>))}</tr>
                    </td>
                    </div> 
                )}

                <input type="checkbox" className="check"  onClick={() => this.onFilterChangetable()}/>
                <label for="filter1" className="label"> <b>Points Table 2020</b></label><br/>
                <hr/>
                {this.state.checkedtable &&(
                    <table className="tableee">
                        <tr className="trr">
                            <th> </th>
                            <th>Team</th>
                            <th>Matches</th>
                            <th>Won</th>
                            <th>Lose</th>
                            <th>Points</th>
                            <th>NRR</th>

                        </tr>
                    
                   {table.map(s => ( <tr tr className="trrr">
                       <td><img className="tablelogo" src={s.logo}/></td>
                <td>{s.Team}</td> 
                        <td>{s.Pld}</td>
                   <td>{s.Won}</td>
                   <td>{s.Lost}</td>
                   <td>{s.Pts}</td>
                   <td>{s.NetRR}</td>
                   </tr> ) )}
                    
                    
                    </table>
                )}


                <input type="checkbox" className="check" onClick={() => this.onFilterChangeplayers()}/>
                <label for="filter1" className="label"> <b>Players</b></label><br/>
                <hr/>
                
                {this.state.checkedplayers &&(
                    <table className="tablee">
                        <tr className="trr">
                            <th>Player Name</th>
                            <th>Country</th>
                            <th>Batting</th>
                            <th>Bowling</th>
                            <th>DOB</th>
                        </tr>
                    
                   {players.map(s => ( <tr tr className="trrr">
                       <td>{s.Player_Name}</td> 
                        <td>{s.Country}</td>
                   <td>{s.Batting_Hand}</td>
                   <td>{s.Bowling_Skill}</td>
                   <td>{s.DOB}</td>
                   </tr> ) )}
                    
                    
                    </table>
                )}



                <input type="checkbox" className="check"  onClick={() => this.onFilterChangematches()} />
                <label for="filter1" className="label"> <b>Matches</b></label><br/>
                <hr/>
                {this.state.checkedmatches &&(
                    <div>
                    <table className="tablee">
                        <tr className="trr" >
                            <th>Team1</th>
                            <th>Team2</th>
                            <th>Winner</th>
                            <th>Man of the Match</th>
                            <th>Venue</th>
                            <th>Date</th>
                        </tr>
                    
                   {matches.map(s => ( <tr className="trrr">
                       <td>{s.team2}</td> 
                        <td>{s.team1}</td>
                   <td>{s.winner}</td>
                   <td>{s.player_of_match}</td>
                   <td>{s.venue}</td>
                   <td>{s.date}</td>
                   </tr> ) )}
                    
                    
                    </table></div>
                )}
               
                </div>
                <div><img className="sponsor" src={"https://res.cloudinary.com/nakul/image/upload/v1606655448/sponsor_q3gmku.png"}/></div>
                <div className="footer">
                    
            <p fontSize="50px"><b>Disclaimer: </b>The Indian Premier League is a professional Twenty20 cricket league in India usually contested between March and May of every year by eight teams representing eight different cities or states in India. The league was founded by the Board of Control for Cricket in India in 2007
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.Quisque eu nibh ac arcu porttitor consectetur et sit
            amet nisi. Phasellussed justo vel nulla vestibulum dapibus.
            Curabitur consequat lacus risus, ac tempus metus porttitor a.
            Quisquelobortis faucibus mauris, et consequat eros vehicula a.
            Quisque hendrerit pharetra augue sed fermentum. Orci varius
            natoquepenatibus et magnis dis parturient montes, nascetur ridiculus
            mus. Curabitur quis tellus interdum, rutrum mi id, consectetur est.
            @ Copyright 2019 . All Right Reserved</p>
        </div>
               
            </div>
        );
    }
}