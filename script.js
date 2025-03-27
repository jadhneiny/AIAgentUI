const aiAgents = [
    { id: 108, name: "Loan Companies", language: "Hindi (High Quality)", model: "gpt-4-turbo", date: "a day ago" },
    { id: 107, name: "Universal AI - Llama", language: "English (High Quality)", model: "llama3-70b-8192", date: "a day ago" },
    { id: 106, name: "Universal AI - Exotel", language: "English (High Quality)", model: "gpt-4o", date: "a day ago" },
    { id: 105, name: "Universal AI - Hindi", language: "Hindi (High Quality)", model: "gpt-4-turbo", date: "a day ago" },
    { id: 103, name: "Universal AI 1", language: "English (High Quality)", model: "gpt-4o", date: "a day ago" },
    { id: 97, name: "Medical Receptionist", language: "English (High Quality)", model: "claude-3-5-sonnet-20240620", date: "2 days ago" },
    { id: 96, name: "Real Estate", language: "English (High Quality)", model: "gpt-3.5-turbo-0125", date: "2 days ago" },
    { id: 94, name: "DELL", language: "Hindi (India) Low Quality", model: "gpt-4-turbo", date: "3 days ago" },
    { id: 93, name: "Shree", language: "Hindi (India) Low Quality", model: "gpt-4-turbo", date: "7 days ago" },
    { id: 92, name: "Electrician GM", language: "Hindi (High Quality)", model: "gpt-4-turbo", date: "7 days ago" }
];

function loadTable() {
    const table = document.getElementById("agentTable");
    aiAgents.forEach(agent => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${agent.id}</td>
            <td>${agent.name}</td>
            <td>${agent.language}</td>
            <td>${agent.model}</td>
            <td>${agent.date}</td>
        `;
        table.appendChild(row);
    });
}

function filterTable() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    const rows = document.querySelectorAll("#agentTable tr");
    
    rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(searchInput) ? "" : "none";
    });
}

function toggleAgentStatus(button) {
    const currentStatus = button.getAttribute('data-status');
    const newStatus = currentStatus === 'Active' ? 'Inactive' : 'Active';
    
    button.setAttribute('data-status', newStatus);
    button.querySelector('span').textContent = newStatus;
    button.classList.toggle('bg-[#15803d]');
    button.classList.toggle('bg-[#283139]');
}

function navigateToAddAgent() {
    window.location.href = 'index2.html';
}

function navigateBack() {
    window.location.href = 'index.html';
}

window.onload = loadTable;
