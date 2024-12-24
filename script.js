const user = [
  {
    profile_pic:
      "https://images.unsplash.com/photo-1734021619978-e544c3607c28?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "john_doe",
    name: "John Doe",
    time_uploaded: "5 minutes ago",
  },
  {
    profile_pic:
      "https://images.unsplash.com/photo-1733747049720-609fab63e0e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D",
    username: "jane_smith",
    name: "Jane Smith",
    time_uploaded: "10 minutes ago",
  },
  {
    profile_pic:
      "https://images.unsplash.com/photo-1733317287150-a9938abb1497?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D",
    username: "alex_99",
    name: "Alex 99",
    time_uploaded: "30 minutes ago",
  },
  {
    profile_pic:
      "https://plus.unsplash.com/premium_photo-1679355751483-edb1fa0d8336?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D",
    username: "sam_wilson",
    name: "Sam Wilson",
    time_uploaded: "1 hour ago",
  },
  {
    profile_pic:
      "https://plus.unsplash.com/premium_photo-1679355751483-edb1fa0d8336?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D",
    username: "kate_85",
    name: "Kate 85",
    time_uploaded: "2 hours ago",
  },
  {
    profile_pic:
      "https://images.unsplash.com/photo-1733254734371-4072d9fbc5c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
    username: "mike_jordan",
    name: "Mike Jordan",
    time_uploaded: "5 hours ago",
  },
  {
    profile_pic:
      "https://images.unsplash.com/photo-1734389481041-fa26afc1267c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
    username: "emily_rose",
    name: "Emily Rose",
    time_uploaded: "8 hours ago",
  },
  {
    profile_pic:
      "https://images.unsplash.com/photo-1734389481041-fa26afc1267c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
    username: "will_brown",
    name: "Will Brown",
    time_uploaded: "12 hours ago",
  },
  {
    profile_pic:
      "https://images.unsplash.com/photo-1733227152851-908b8dfe6602?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    username: "sophia_walker",
    name: "Sophia Walker",
    time_uploaded: "1 day ago",
  },
  {
    profile_pic:
      "https://images.unsplash.com/photo-1733227152851-908b8dfe6602?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    username: "charlie_k",
    name: "Charlie K",
    time_uploaded: "2 days ago",
  },
];

let sum = "";

user.forEach((elem, indx) => {
  sum += `
    <div class="status" id="${indx}" >
          <img src="${elem.profile_pic}" alt="" />
          <div class="data">
            <h1>${elem.username}</h1>
            <p>${elem.time_uploaded}</p>
          </div>
        </div>
    `;
});
var full = document.querySelector(".full");
var fulluser = document.querySelector(".full h2");
var growth = document.querySelector(".growth");
var allstatus = document.querySelector(".allstatus");
allstatus.innerHTML = sum;

allstatus.addEventListener("click", (dets) => {
  var result = user[dets.target.id];
  full.style.display = "block";
  full.style.backgroundImage = `url(${result.profile_pic})`;
  fulluser.innerHTML = result.name;

  var grow = 0;

  var interval = setInterval(() => {
    grow++;
    growth.style.width = grow + "%";
  }, 30);

  setTimeout(() => {
    full.style.display = "none";
    clearInterval(interval);
  }, 3000);
});
