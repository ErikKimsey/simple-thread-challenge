import { PROJECT_DATA } from './project_data'
import { Project, Set } from './components/ProjectAndSet'

const HIGH_CITY_FULL_DAY = 85
const LOW_CITY_FULL_DAY = 75
const HIGH_CITY_TRAVEL = 55
const LOW_CITY_TRAVEL = 45

let CITY_COSTS = {
    high: {
        travel: HIGH_CITY_TRAVEL,
        full: HIGH_CITY_FULL_DAY
    },
    low: {
        travel: LOW_CITY_TRAVEL,
        full: LOW_CITY_FULL_DAY
    }
}

const Sets = []

export function InitReimbursementCalculation() {
    if (PROJECT_DATA) {
        PROJECT_DATA[1].projects.forEach((e, i) => {
            // e.projects.forEach((f, i) => {
            let project = new Project(i)

            // [] -- set city-cost type
            project.cost = e.cityCost

            // [] -- convert date from string
            let bD = new Date(e.beginDate)
            // console.log(bD);
            project.begin = bD

            // [] -- convert date from string
            let eD = new Date(e.endDate)
            project.end = eD

            let dd = new Date('01/01/2023')
            console.log('01/01/2023 == 10 /01 / 2023')
            console.log('01/01/2023' == '01/01/2023')

            // [] -- set duration of project
            let daysCount = CalculateDurationOfProject(bD, eD)
            project.totalDays = daysCount

            // [] -- set project reimbursement
            project.reimbursement = CalcReimbursement(e.cityCost, daysCount)

            // console.log(project);
            // })
        })
    }
}
// [] -- count number of project dates
function CalculateDurationOfProject(_bDate, _eDate) {
    let dif = _eDate - _bDate
    let daysCount = dif / (1000 * 24 * 3600)
    return daysCount + 1
}

function CheckIfDateOverlaps(currProj, prevProj) {
    // -------- check if Project dates overlap w/ previous Projects' dates::
    // ----------- if(proj2.beginDate <= proj1.endDate) ::
    if (currProj.beginDate < prevProj.endDate) {
        //
        // --------------- for(proj1.endDate - proj2.beginDate)
        // -- how to determine number of days of overlap (from )
        let overlapCount = 0
        if (currProj.totalDays > prevProj.totalDays) {
            for (let i = 0; i < currProj.totalDays; i++) {
                //
            }
        }

        // ------------------- if (proj1.Date[i] === proj2.Date[i]) ::
    }

    // ----------------------- overlapCount++
    // --------------------------- if(proj1.cost > proj2.cost) ::
    // ------------------------------- proj1.reimb = proj1.totalDays * proj1.costType
    // ------------------------------- proj2.reimb = proj2.reimb - (proj2.costType * overlapCount)
    // --------------------------- else ::
    // ------------------------------- proj1.reimb = proj1.reimb - (proj1.cost * overlapCount)
    // ------------------------------- proj2.reimb = proj1.totalDays * proj2.costType
}

function CalcReimbursement(_cityType, _daysCount) {
    let full = 0
    let travel = 0

    if (_daysCount <= 2) {
        full = _daysCount
    }

    if (_daysCount > 2) {
        travel = 2
        full = _daysCount - travel
    }

    let travelReimbursement = travel * CITY_COSTS[_cityType].travel
    let fullDayReimbursement = full * CITY_COSTS[_cityType].full

    return travelReimbursement + fullDayReimbursement
}

// [] -- convert date
// [] -- get data from project_data
// [] -- count numver of project dates
// [] -- set count to Project instance
// [] -- set project dates to Project.days[]
// [] -- set cityCost to Project.cost
// ----- if(count <= 2) ::
// --------- Project.reimbursement = fullday_city(low/high)cost * count
// ----- if(count > 2) ::
// --------- [_ BEGIN WITH THE: "THE MEATY LOGIC" _]
//
// === === //
// === === //
// === === //
//
// === Set the cost of each project, while IGNORING other projects in set === //
// "MEATY LOGIC"
//
// Solution #1
// -- Get Number of Travel Days::
// ---- Project.dates[begin] && Project.dates[end]
// -- Get Number of Full Days::
// ---- Project.dates.length - PRoject.travelDaysCnt
//
// Solution #2
// -- while instantiating each Project::
// ---- proj[i].reimb = proj[i].days.count * proj[i].costType
// ------ proj.reimb = proj.days.count * proj.costType
// ---- if(proj[i-1])
// ------ if(proj2.beginDate < proj1.endDate) ::
// --------- >> (count overlap count && find the higher cityCost proj && calc reimbursement difference via "count * higher cost" && set lowCost.reimb = 0)
//
// ========================================================================
// ========================================================================
