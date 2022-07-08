const HeaderElement = `
    <div class='twelve columns' style='margin-top: 10%'>
        <h2>Takashi Aoki</h2>
        <p>Hello, I am a designer/visual artist specializing in CGI and human-computer interaction. Work in between 3D, motion graphics and software development.</p>
        <a href='./index.html'>Home</a> / 
        <a href='./bio.html'>Bio</a> / 
        <a href='https://www.linkedin.com/in/chutaicho/'  target='_blank'>Linkedin</a> / 
        <a href='https://www.instagram.com/chutaicho/' target='_blank'>Instagram</a> / 
        <a href='https://archive.takashiaoki.com/' target='_blank'>Archive</a>
        <br><br>
    </div>
`;
const HeaderSubElement = `
    <div class='twelve columns' style='margin-top: 10%'>
        <h2>Takashi Aoki</h2>
        <p>Hello, I am a designer/visual artist specializing in CGI and human-computer interaction. Work in between 3D, motion graphics and software development.</p>
        <a href='../index.html'>Home</a> / 
        <a href='../bio.html'>Bio</a> / 
        <a href='https://www.linkedin.com/in/chutaicho/'  target='_blank'>Linkedin</a> / 
        <a href='https://www.instagram.com/chutaicho/' target='_blank'>Instagram</a> / 
        <a href='https://archive.takashiaoki.com/' target='_blank'>Archive</a>
        <br><br>
    </div>
`;

const FooterElement = `
    <div class="six columns" style="margin-bottom: 10%">
        <a href="./index.html">Home</a><br>
        <a href="./bio.html">Bio</a><br>
        <a href="https://archive.takashiaoki.com/" target="_blank">Past Archive</a><br>
    </div>
    <div class="six columns" style="margin-bottom: 10%">
        <a href="https://www.linkedin.com/in/chutaicho/" target="_blank">Linkedin</a><br>
        <a href="https://www.instagram.com/chutaicho/" target="_blank">Instagram</a><br>
        <a href=".">MAIL</a><br>
    </div>
`;
const FooterSubElement = `
    <div class="six columns" style="margin-bottom: 10%">
        <a href="../index.html">Home</a><br>
        <a href="../bio.html">Bio</a><br>
        <a href="https://archive.takashiaoki.com/" target="_blank">Past Archive</a><br>
    </div>
    <div class="six columns" style="margin-bottom: 10%">
        <a href="https://www.linkedin.com/in/chutaicho/" target="_blank">Linkedin</a><br>
        <a href="https://www.instagram.com/chutaicho/" target="_blank">Instagram</a><br>
        <a href=".">MAIL</a><br>
    </div>
`;

const header = document.getElementById('header');
header.innerHTML = (header.classList.contains('sub')) ? HeaderSubElement : HeaderElement;
const footer = document.getElementById('footer');
footer.innerHTML = (footer.classList.contains('sub')) ? FooterSubElement : FooterElement;

