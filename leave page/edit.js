document.getElementById('leaveForm').addEventListener('submit', function(e) {
    e.preventDefault();

    
    var employee = document.getElementById('employee').value;
    var leaveType = document.getElementById('leaveType').value;
    var startTime = document.getElementById('startTime').value;
    var endTime = document.getElementById('endTime').value;
    var reason = document.getElementById('reason').value;

    
    var application = {
        employee: employee,
        leaveType: leaveType,
        startTime: startTime,
        endTime: endTime,
        reason: reason
    };

    
    appendLeaveApplication(application);


    document.getElementById('leaveApplications').style.display = 'block';
});

function appendLeaveApplication(application) {
    var tableBody = document.getElementById('leaveApplicationsBody');
    var row = tableBody.insertRow();

    row.insertCell(0).textContent = application.employee;
    row.insertCell(1).textContent = application.leaveType;
    row.insertCell(2).textContent = application.startTime;
    row.insertCell(3).textContent = application.endTime;
    row.insertCell(4).textContent = application.reason;
}
