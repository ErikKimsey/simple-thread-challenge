import { PROJECT_DATA } from "./project_data"
import { Project, Set } from "./components/ProjectAndSet";

/**
 *
 * QUESTIONS FOR AL:
 * -- if a project is only 1 or 2 days, those days are priced as ONLY full-days?  Or BOTH, travel AND full-days?
 * -- "sequence of projects"? A "sequence" is: a Set's Projects' dates overlap?
 *
 *
 */

const HIGH_CITY_FULL_DAY = 85;
const LOW_CITY_FULL_DAY = 75;
const HIGH_CITY_TRAVEL = 55;
const LOW_CITY_TRAVEL = 45;

let CITY_COSTS = {
  "high": {
    travel: HIGH_CITY_TRAVEL,
    full: HIGH_CITY_FULL_DAY
  },
  "low": {
    travel: LOW_CITY_TRAVEL,
    full: LOW_CITY_FULL_DAY
  }
}


const Sets = []

export function InitReimbursementCalculation() {

  if (PROJECT_DATA) {

    PROJECT_DATA[1].projects.forEach((e, i) => {
      let project2 = new Project(i);

      let bD = new Date(e.beginDate);
      project2.begin = bD;

      let eD = new Date(e.endDate);
      project2.end = eD;

      let daysCount = CalculateDaysCount(bD, eD);
      project2.totalDays = daysCount;

      project2.cost = e.cityCost;

      project2.reimbursement = CalcReimbursement(e.cityCost, daysCount);

      console.log(project2);
    });
  }




}

function CalculateDaysCount(_bDate, _eDate) {
  let dif = _eDate - _bDate;
  let daysCount = (dif / (1000 * 24 * 3600));
  return daysCount + 1;
}

function CalcReimbursement(_cityType, _daysCount) {
  let full = 0;
  let travel = 0;

  if (_daysCount <= 2) {
    travel = _daysCount;
  }

  if (_daysCount > 2) {
    travel = 2;
    full = _daysCount - travel;
  }

  let travelReimbursement = travel * CITY_COSTS[_cityType].travel;
  let fullDayReimbursement = full * CITY_COSTS[_cityType].full;

  return travelReimbursement + fullDayReimbursement;

}

// [] -- convert date 
// [] -- get data from project_data
// [] -- count numver of project dates
// [] -- set count to Project instance
// [] -- set dates to Project.days[]
// [] -- set cityCost to Project.cost
// ----- if(count <= 2) :: 
// --------- Project.reimbursement = fullday_city(low/high)cost * count
// ----- if(count > 2) :: 
// --------- [_ BEGIN WITH THE: "THE MEATY LOGIC" _]

// === === //
// === === //
// === === //
//
// === Set the cost of each project, while IGNORING other projects in set === //
// "THE MEATY LOGIC"
// -- Get Number of Travel Days::
// ---- Project.dates[begin] && Project.dates[end]
// -- Get Number of Full Days::
// ---- Project.dates.length - PRoject.travelDaysCnt
// -- Calculate total cost:: 
// ---- trvl = Project.travelDaysCnt * Project.travelCostViaCity
// ---- full = Project.fullDaysCnt * Project.fullDayCostViaCity
// -------- Project.reimbursement = "trvl" + "full"
// 
// === Find Date-Overlap of each Set's Projects === //
// === === //
// === === //
// === === //
// 
// === Find Date-Overlap of each Set's Projects === //




// ========================================================================
// ========================================================================



