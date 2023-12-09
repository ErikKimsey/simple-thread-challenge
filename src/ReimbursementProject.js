/**
 * 
 * QUESTIONS FOR AL:
 * -- if a project is only 1 or 2 days, those days are priced as ONLY full-days?  Or BOTH, travel AND full-days?
 * -- "sequence of projects"? A "sequence" is: a Set's Projects' dates overlap?
 * 
 * 
 */

// -- get data from project_data
// -- convert date 
// -- count numver of project dates
// -- set count to Project instance
// -- set dates to Project.days[]
// -- set cityCost to Project.cost
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

const HIGH_CITY_FULL_DAY = 85;
const LOW_CITY_FULL_DAY = 75;
const HIGH_CITY_TRAVEL = 55;
const LOW_CITY_TRAVEL = 45;

class Project {
  constructor(projNumber, begin, end, totalDays, cityCost) {
    this.projectId = projNumber;
    this.begin = begin;
    this.end = end;
    this.totalDays = totalDays;
    this.cost = cityCost;
    this.dates = [];
    this.travelDaysCnt = -1;
    this.FullDaysCnt = -1;
    this.reimbursement = -1;
  }

  set setDaysArr(days) {
    this.days = days;
  }

  set setReimbursementAmt(amnt) {
    this.reimbursement = amnt;
  }
}

class Set {
  constructor(id) {
    this.id = id;
    this.projects = [];
    this.totalSetReimbursementAmnt = 0;
    this.date
  }

  createProjects() {

  }
}

export { Project, Set };
