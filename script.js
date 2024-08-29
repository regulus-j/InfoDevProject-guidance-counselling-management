document.addEventListener('DOMContentLoaded', () => {
    // Simulate data
    const totalStudents = 150;
    const upcomingSessions = 5;
    const recentAlerts = 'All systems are running smoothly';

    // Populate dashboard
    document.getElementById('totalStudents').textContent = totalStudents;
    document.getElementById('upcomingSessions').textContent = upcomingSessions;
    document.getElementById('recentAlerts').textContent = recentAlerts;

    // Populate student list
    const students = ['John Doe', 'Jane Smith', 'Emily Johnson'];
    const studentList = document.getElementById('studentList');
    students.forEach(student => {
        const li = document.createElement('li');
        li.textContent = student;
        studentList.appendChild(li);
    });

    // Populate counselor list
    const counselors = ['Mr. Adams', 'Ms. Baker', 'Dr. Clark'];
    const counselorList = document.getElementById('counselorList');
    counselors.forEach(counselor => {
        const li = document.createElement('li');
        li.textContent = counselor;
        counselorList.appendChild(li);
    });

    // Generate report button event
    document.getElementById('generateReport').addEventListener('click', () => {
        document.getElementById('reportStatus').textContent = 'Report generated successfully!';
    });
});
