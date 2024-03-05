import teamsData from "./data.js";
console.log(teamsData);

const teamPillsContainerId = "teams-container";
const teamContentContainerId = "team-content-container";

// TODO 1: Displaying team pills for each team
function displayTeamPills(teamsData) {
     // 1. Get the pill container div
     const teamContentContainer = document.getElementById(teamContentContainerId);
     console.log(teamContentContainer);
    // 2. For each of the team
    teamsData.forEach(teamsData => {
        // 2.1 Create team pill, set id for team element
        const creat = document.createElement("div");
        creat.classList.add("card","m-2")
        creat.innerHTML = `<div id="${teamsData.id}" class="card-body">${teamsData.name}</div>`
        console.log(creat);
        
    //   2.2 Append team pill to the pill container div  
    teamContentContainer.append(creat);
    });
    
}

displayTeamPills(teamsData);

const teamPillsContainer = document.getElementById(teamPillsContainerId);

// TODO 2: Event handler to show Carousel with images for selected team
teamPillsContainer.addEventListener("click", (e) => {
  //e.target -> element node where the "click" event is fired from
  //events fired in child, bubbles up to the parent
  console.log(e.target);
});

