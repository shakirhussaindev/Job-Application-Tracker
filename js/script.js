// // Get Tab Button

const allTabBtn = document.getElementById("all-tab-btn");
const interviewTabBtn = document.getElementById("interview-tab-btn");
const rejectedTabBtn = document.getElementById("rejected-tab-btn");

// // Get Tab
const cards = document.getElementById("allCards");
const interviewTab = document.getElementById("interview-tab");
const rejectedTab = document.getElementById("rejected-tab");

const noJobs = document.getElementById("noJobs");

// toggle style for tab btns and switch tab
function toggleStyle(id) {
  allTabBtn.classList.add("bg-white", "text-[#64748B]");
  interviewTabBtn.classList.add("bg-white", "text-[#64748B]");
  rejectedTabBtn.classList.add("bg-white", "text-[#64748B]");

  allTabBtn.classList.remove("text-white", "bg-[#3B82F6]");
  interviewTabBtn.classList.remove("text-white", "bg-[#3B82F6]");
  rejectedTabBtn.classList.remove("text-white", "bg-[#3B82F6]");

  const selected = document.getElementById(id);

  selected.classList.remove("bg-white", "text-[#64748B]");
  selected.classList.add("text-white", "bg-[#3B82F6]");

  const interCount = document.getElementById("interview-count");
  const rejectCount = document.getElementById("rejected-count");


  if ((selected === allTabBtn)) {
    cards.classList.remove("hidden");
    interviewTab.classList.add("hidden")
    rejectedTab.classList.add("hidden");

    interCount.innerText = ''
    rejectCount.innerText = '';
    

  }
  if ((selected === interviewTabBtn)) {
    cards.classList.add("hidden");
    interviewTab.classList.remove("hidden")
    rejectedTab.classList.add('hidden')

    let interviewLength = interviewTab.children.length

    
    rejectCount.innerText = "";
    interCount.innerText = `${interviewLength} of`;


    if (interviewLength < 1) {
      noJobs.classList.remove("hidden");
    } else {
      noJobs.classList.add("hidden");
    }
    
  }
  else if(selected === rejectedTabBtn){
    cards.classList.add("hidden");
    interviewTab.classList.add("hidden");
    rejectedTab.classList.remove("hidden")

    let rejectedLength = interviewTab.children.length;

    
    interCount.innerText = ''
    rejectCount.innerText = `${rejectedLength} of`;

    
   if (rejectedLength < 1) {
     noJobs.classList.remove("hidden");
   } else {
     noJobs.classList.add("hidden");
   }
  }
  
}

const totalshow = document.getElementById("total-show");
const interviewShow = document.getElementById("interview-show");
const rejectedShow = document.getElementById("rejected-show");

const jobsCount = document.getElementById("jobs-count");

const allContainer = document.getElementById("all-container");

allContainer.addEventListener("click", function (e) {
  const clickBtn = e.target;

  const interviewBtn = e.target.classList.contains("interview-Btn");
  const rejectedBtn = e.target.classList.contains("rejected-Btn");
  const deleteBtn = e.target.classList.contains("deleteCard");

  if (interviewBtn || rejectedBtn || deleteBtn) {
    const parent = clickBtn.closest(".card").parentNode;

    const defaultBadge = parent.querySelector(".badge");
    const interviewBadge = parent.querySelector(".interview-badge");
    const rejectedBadge = parent.querySelector(".rejected-badge");

    if (interviewBtn) {
      interviewTab.appendChild(parent);
      interviewBadge.classList.remove("hidden");
      defaultBadge.classList.add("hidden");
      rejectedBadge.classList.add("hidden");

      updateStatus();

      
    } else if (rejectedBtn) {
      rejectedTab.appendChild(parent);
      interviewBadge.classList.add("hidden");
      defaultBadge.classList.add("hidden");
      rejectedBadge.classList.remove("hidden");

      updateStatus();

      
    } else if (deleteBtn) {
      parent.remove();
    }

    totalshow.innerText = cards.children.length;
    jobsCount.innerText = cards.children.length;
  }
  

  
});

function updateStatus(){
  interviewShow.innerText = interviewTab.children.length;
  rejectedShow.innerText = rejectedTab.children.length;

  if ( interviewTab.children.length < 1 ||
    rejectedTab.children.length < 1 ||
    cards.children.length < 1
  ) {
    noJobs.classList.remove("hidden");
  } else {
    noJobs.classList.add("hidden");
  }
}


