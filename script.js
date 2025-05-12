setInterval(() => {
    let hr = document.getElementById('hrs');
    let min = document.getElementById('mins');
    let sec = document.getElementById('secs');
    let ampm = document.getElementById('ampm');
  
    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');
  
    let h_dot = document.querySelector('.h_dot');
    let m_dot = document.querySelector('.m_dot');
    let s_dot = document.querySelector('.s_dot');
  
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
  
    let am = h >= 12 ? 'PM' : 'AM';
  
    // Convert to 12-hour format
    h = h % 12;
    h = h ? h : 12;
  
    // Update text
    hr.innerHTML = h < 10 ? '0' + h : h;
    min.innerHTML = m < 10 ? '0' + m : m;
    sec.innerHTML = s < 10 ? '0' + s : s;
    ampm.innerHTML = am;
  
    // Animate circles
    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;
  
    // Rotate dots
    h_dot.style.transform = `rotate(${h * 30}deg)`;
    m_dot.style.transform = `rotate(${m * 6}deg)`;
    s_dot.style.transform = `rotate(${s * 6}deg)`;
  }, 1000);
  