document.addEventListener('DOMContentLoaded', function() {
    const calendar = document.querySelector('.calendar');
    const monthYearDisplay = document.querySelector('.month-year');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
  
    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();
  
    function createCalendar(year, month) {
      calendar.innerHTML = '';
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const startDay = new Date(year, month, 1).getDay();
  
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      monthYearDisplay.textContent = `${monthNames[month]} ${year}`;
  
      const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      for (let day of daysOfWeek) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = day;
        calendar.appendChild(dayElement);
      }
  
      for (let i = 0; i < startDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.classList.add('day');
        calendar.appendChild(emptyDay);
      }
  
      for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = i;
        calendar.appendChild(dayElement);
  
        const today = new Date();
        if (year === today.getFullYear() && month === today.getMonth() && i === today.getDate()) {
          dayElement.classList.add('today');
        }
  
        dayElement.addEventListener('click', function() {
          const selected = document.querySelector('.selected');
          if (selected) {
            selected.classList.remove('selected');
          }
          this.classList.add('selected');
        });
      }
    }
  
    function updateCalendar() {
      createCalendar(currentYear, currentMonth);
    }
  
    prevButton.addEventListener('click', function() {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      updateCalendar();
    });
  
    nextButton.addEventListener('click', function() {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      updateCalendar();
    });
  
    updateCalendar();
  });
  