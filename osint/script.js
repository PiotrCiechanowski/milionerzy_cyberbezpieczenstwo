const quizData = [
  {q:"Co oznacza skrót OSINT?", a:["Metoda szyfrowania","Otwarte źródła informacji","Sieciowa inwigilacja","System ochrony danych"], c:1},
  {q:"Jaki protokół jest uważany za bezpieczny do przesyłania danych?", a:["FTP","TELNET","HTTPS","HTTP"], c:2},
  {q:"Jak nazywa się podszywanie się pod kogoś w sieci?", a:["Phishing","Spoofing","Hacking","DDoS"], c:1},
  {q:"Które narzędzie służy do analizy ruchu sieciowego?", a:["Wireshark","Photoshop","Botnet","Malware"], c:0},
  {q:"Co to jest VPN?", a:["Virtual Public Node","Verified Public Network","Virtual Private Network","Very Private Network"], c:2},
  {q:"Jaki atak polega na przeciążeniu serwera?", a:["Phishing","Man-in-the-Middle","DDoS","SQL Injection"], c:2},
  {q:"Jaką funkcję pełni firewall?", a:["Kopie zapasowe","Zarządzanie hasłami","Monitorowanie ruchu sieciowego","Szyfrowanie"], c:2},
  {q:"Co jest ważne przy tworzeniu hasła?", a:["Zapisywanie na kartce","Regularna zmiana hasła","Udostępnianie znajomym","Używanie jednego hasła wszędzie"], c:1},
  {q:"Skąd OSINT pozyskuje dane?", a:["Darknet","Tajne bazy","Publiczne źródła","Zapytania do FBI"], c:2},
  {q:"Co usuwa wirusy komputerowe?", a:["Przeglądarka","Antywirus","Odtwarzacz","Edytor tekstu"], c:1},
  {q:"Który protokół jest szyfrowany?", a:["FTP","HTTP","HTTPS","Telnet"], c:2},
  {q:"Jak nazywa się metoda wyłudzania haseł przez e-mail?", a:["Brute force","Phishing","Sniffing","Spoofing"], c:1},
  {q:"Czym jest 2FA?", a:["Dwukrotny firewall","Protokół VPN","Dwuskładnikowe uwierzytelnianie","System szyfrowania plików"], c:2},
  {q:"Jakie rozszerzenie ma często plik złośliwego oprogramowania?", a:[".jpg",".exe",".mp3",".txt"], c:1},
  {q:"Czym jest ransomware?", a:["Atak DDoS","Oprogramowanie szyfrujące pliki i żądające okupu","Firewall","Narzędzie OSINT"], c:1},
  {q:"Który port jest używany przez HTTPS?", a:["80","443","25","21"], c:1},
  {q:"Co oznacza SSL?", a:["System Secure Login","Secure Sockets Layer","Secure Software License","Safe Socket Layer"], c:1},
  {q:"Co oznacza skrót VPN?", a:["Virtual Public Node","Virtual Private Network","Variable Protocol Network","Verified Personal Network"], c:1},
  {q:"Który z ataków wykorzystuje wstrzyknięcie zapytań do bazy?", a:["SQL Injection","Spoofing","Brute force","Phishing"], c:0},
  {q:"Jakie dane analizuje OSINT?", a:["Poufne","Publiczne","Zaszyfrowane","Tajne wojskowe"], c:1},
  {q:"Co oznacza skrót IP?", a:["Interconnect Port","Input Process","Internal Program","Internet Protocol"], c:3},
  {q:"Który algorytm służy do szyfrowania?", a:["HTML","SMTP","AES","CSS"], c:2},
  {q:"Jaką funkcję ma honeypot?", a:["Szyfrowanie danych","Ochrona hasła","Monitorowanie poczty","Przyciąganie atakujących"], c:3},
  {q:"Czym jest sniffing?", a:["Podsłuch pakietów w sieci","Skanowanie portów","Tworzenie kopii zapasowych","Atak brute force"], c:0},
  {q:"Co to jest botnet?", a:["Program antywirusowy","Sieć zainfekowanych komputerów","Firewall","Sieć VPN"], c:1},
  {q:"Czym jest malware?", a:["Program antywirusowy","Złośliwe oprogramowanie","Firewall","Sieć VPN"], c:1},
  {q:"Który port jest domyślny dla HTTP?", a:["110","21","80","25"], c:2},
  {q:"Czym jest dark web?", a:["System szyfrowania","Legalna witryna","Firewall","Część internetu niedostępna w wyszukiwarkach"], c:3},
  {q:"Co to jest brute force?", a:["VPN","Atak siłowy na hasło","Podszywanie się","Analiza sieci"], c:1},
  {q:"Który system operacyjny jest popularny w pentestach?", a:["macOS","Kali Linux","Windows XP","Ubuntu Server"], c:1},
  {q:"Co to jest phishing?", a:["Skanowanie portów","VPN","Wyłudzanie danych","Atak DDoS"], c:2},
  {q:"Które narzędzie jest używane w OSINT?", a:["Excel","Maltego","Photoshop","GIMP"], c:1},
  {q:"Czym jest hash?", a:["Rodzaj VPN","Szyfrowanie dwustronne","Jednokierunkowy skrót danych","Nazwa wirusa"], c:2},
  {q:"Który protokół służy do przesyłania poczty?", a:["SSH","HTTP","FTP","SMTP"], c:3},
  {q:"Co oznacza skrót DLP?", a:["Deep Learning Proxy","Data Local Protocol","Dynamic Login Process","Data Loss Prevention"], c:3},
  {q:"Czym jest keylogger?", a:["Firewall","Program rejestrujący naciśnięcia klawiszy","VPN","Antywirus"], c:1},
  {q:"Który z protokołów jest bezpieczny do zdalnego logowania?", a:["FTP","Telnet","SSH","HTTP"], c:2},
  {q:"Czym jest pentesting?", a:["Instalacja antywirusa","Testy bezpieczeństwa systemów","Projektowanie sieci","Tworzenie kopii zapasowych"], c:1},
  {q:"Który algorytm hashujący jest popularny?", a:["SHA-256","PNG","JPG","HTML"], c:0},
  {q:"Czym jest CERT?", a:["System szyfrowania danych","Zespół reagowania na incydenty komputerowe","Rodzaj firewalla","Program OSINT"], c:1},
  {q:"Czym jest exploit?", a:["VPN","Kod wykorzystujący lukę bezpieczeństwa","Firewall","Antywirus"], c:1},
  {q:"Które z poniższych to przykład inżynierii społecznej?", a:["SQL Injection","Phishing","DDoS","Sniffing"], c:1},
  {q:"Czym jest TOR?", a:["Program antywirusowy","Sieć anonimizująca ruch w internecie","Firewall","Protokół HTTPS"], c:1},
  {q:"Który port jest standardem dla FTP?", a:["80","21","443","110"], c:1},
  {q:"Czym jest MITM (Man-in-the-Middle)?", a:["Firewall","Antywirus","Atak polegający na przechwytywaniu komunikacji","VPN"], c:2},
  {q:"Który protokół jest używany do szyfrowanej poczty?", a:["Telnet","FTP","SMTPS","HTTP"], c:2},
  {q:"Czym jest OSINT?", a:["Podsłuchiwanie pakietów","Tworzenie malware","Atak DDoS","Pozyskiwanie danych z ogólnodostępnych źródeł"], c:3},
  {q:"Który port jest używany przez SMTP?", a:["110","25","21","443"], c:1},
  {q:"Czym jest spear phishing?", a:["Atak DDoS","VPN","Ukierunkowany phishing na konkretną osobę","SQL Injection"], c:2},
  {q:"Który system plików ma uprawnienia użytkowników?", a:["FAT32","ISO9660","exFAT","NTFS"], c:3},
  {q:"Czym jest IDS?", a:["VPN","Antywirus","Firewall","System wykrywania intruzów"], c:3},
  {q:"Co oznacza skrót GDPR (RODO)?", a:["Standard szyfrowania","System kopii zapasowych","Globalny protokół sieciowy","Ogólne rozporządzenie o ochronie danych"], c:3},
  {q:"Które urządzenie monitoruje ruch sieciowy?", a:["Router","Switch","Monitor","IDS"], c:3},
  {q:"Czym jest honeynet?", a:["VPN","Sieć serwerów do wabienia atakujących","Firewall","Proxy"], c:1},
  {q:"Czym jest proxy?", a:["Antywirus","IDS","Pośrednik w komunikacji sieciowej","Firewall"], c:2},
  {q:"Który protokół szyfruje dane logowania?", a:["Telnet","SSH","HTTP","SNMP"], c:1},
  {q:"Czym jest brute force?", a:["Proxy","Firewall","VPN","Atak polegający na zgadywaniu haseł"], c:3},
  {q:"Który port jest standardowy dla POP3?", a:["110","25","21","80"], c:0},
  {q:"Czym jest backdoor?", a:["Firewall","Ukryte wejście do systemu","IDS","Antywirus"], c:1},
  {q:"Który certyfikat potwierdza tożsamość domeny?", a:["PNG","SHA","SSL/TLS","AES"], c:2},
  {q:"Czym jest phishing telefoniczny?", a:["Spoofing","Vishing","Smishing","Sniffing"], c:1},
  {q:"Czym jest phishing SMS?", a:["SQL Injection","Spoofing","Smishing","Vishing"], c:2},
  {q:"Który system szyfruje dyski w Windows?", a:["TrueCrypt","BitLocker","VeraCrypt","FileVault"], c:1},
  {q:"Czym jest spoofing e-mail?", a:["SQL Injection","Wyłudzanie danych SMS","Podszywanie się pod adres nadawcy","Podsłuch pakietów"], c:2},
  {q:"Który port jest używany przez IMAP?", a:["25","53","80","143"], c:3},
  {q:"Czym jest CAPTCHA?", a:["Szyfrowanie","Test odróżniający człowieka od bota","Proxy","Firewall"], c:1},
  {q:"Co oznacza skrót SOC?", a:["Secure Online Channel","Security Operations Center","System of Communication","Server Operation Control"], c:1},
  {q:"Czym jest hashing?", a:["VPN","Przekształcanie danych w skrót","Szyfrowanie kluczem publicznym","Proxy"], c:1},
  {q:"Czym jest exploit zero-day?", a:["Atak DDoS","SQL Injection","Atak wykorzystujący nieznaną lukę","VPN"], c:2},
  {q:"Czym jest rootkit?", a:["Firewall","Antywirus","Złośliwe oprogramowanie ukrywające się w systemie","Proxy"], c:2},
  {q:"Czym jest sniffing Wi-Fi?", a:["Atak DDoS","VPN","Firewall","Podsłuchiwanie ruchu w sieci bezprzewodowej"], c:3},
  {q:"Który port jest używany przez DNS?", a:["443","53","25","143"], c:1},
  {q:"Czym jest SQL Injection?", a:["Firewall","Proxy","VPN","Wstrzyknięcie zapytania SQL"], c:3},
  {q:"Czym jest atak ransomware?", a:["VPN","Firewall","Szyfrowanie plików i żądanie okupu","Proxy"], c:2},
  {q:"Czym jest sniffing?", a:["Atak DDoS","VPN","Podsłuchiwanie pakietów","Proxy"], c:2},
  {q:"Który port jest standardem dla TELNET?", a:["25","443","23","143"], c:2},
  {q:"Czym jest whitelist?", a:["Lista podejrzanych aplikacji","Lista zaufanych aplikacji lub adresów","Firewall","IDS"], c:1},
  {q:"Czym jest blacklist?", a:["VPN","Lista zakazanych aplikacji lub adresów","Firewall","Lista zaufanych programów"], c:1},
  {q:"Czym jest sniffing ARP?", a:["VPN","Firewall","Podsłuchiwanie i manipulacja w tablicy ARP","Proxy"], c:2},
  {q:"Czym jest brute force online?", a:["Proxy","VPN","Zgadywanie haseł przez internet","Firewall"], c:2},
  {q:"Które narzędzie służy do skanowania portów?", a:["Excel","Wireshark","Word","Nmap"], c:3},
  {q:"Czym jest steganografia?", a:["Szyfrowanie","VPN","Ukrywanie danych w innych plikach","Proxy"], c:2},
  {q:"Który algorytm jest asymetryczny?", a:["AES","SHA-256","RSA","MD5"], c:2},
  {q:"Czym jest brute force offline?", a:["Proxy","Firewall","Łamanie haseł na lokalnym pliku","VPN"], c:2},
  {q:"Który port jest używany przez Kerberos?", a:["25","110","443","88"], c:3},
  {q:"Czym jest SIEM?", a:["Firewall","Antywirus","System zarządzania logami i zdarzeniami bezpieczeństwa","IDS"], c:2},
  {q:"Czym jest phishing przez SMS?", a:["Spoofing","Proxy","Smishing","Vishing"], c:2},
  {q:"Czym jest vishing?", a:["Phishing przez SMS","VPN","Phishing przez rozmowę telefoniczną","Proxy"], c:2},
  {q:"Które narzędzie używa się do łamania haseł?", a:["Excel","John the Ripper","Word","PowerPoint"], c:1},
  {q:"Czym jest malware typu trojan?", a:["Firewall","Oprogramowanie podszywające się pod legalne","Proxy","VPN"], c:1},
  {q:"Który port jest używany przez LDAP?", a:["23","443","21","389"], c:3},
  {q:"Czym jest CSRF?", a:["VPN","Firewall","Atak fałszujący żądania użytkownika","Proxy"], c:2}

];

let qIdx=0, safeLvl=0, finished=false, usr='', quizPart=[];

const startBtn=document.getElementById('start-btn');
const username=document.getElementById('username');
const startScreen=document.getElementById('start');
const gameScreen=document.getElementById('game');
const qText=document.getElementById('qText');
const ansBtns=Array.from(document.querySelectorAll('.ans'));
const progressBar=document.getElementById('progressBar');
const progressTxt=document.getElementById('progressTxt');
const s3=document.getElementById('s3');
const s6=document.getElementById('s6');
const resultEl=document.getElementById('result');
const restartBtn=document.getElementById('restart');

username.addEventListener('input', () => {
    startBtn.disabled = username.value.trim().length === 0;
});

startBtn.addEventListener('click',()=>{
  usr=username.value.trim();
  startScreen.style.display='none';
  gameScreen.style.display='flex';
  initGame();
});

restartBtn.addEventListener('click',()=>{
  startScreen.style.display='flex';
  gameScreen.style.display='none';
  username.value='';
  startBtn.disabled=true;
  resultEl.textContent='';
  restartBtn.style.display='none';
});

function initGame(){
  qIdx=0; safeLvl=0; finished=false;
  s3.classList.remove('safeDone');
  s6.classList.remove('safeDone');
  resultEl.textContent='';
  restartBtn.style.display='none';
  progressBar.style.width='0%';
  ansBtns.forEach(b=>b.style.display='inline-block');
  quizPart=shuffleArray([...quizData]).slice(0,10);
  showQ();
}

function showQ(){
  if(qIdx>=quizPart.length || finished){ endGame(); return; }
  const q=quizPart[qIdx];

  qText.textContent=`${qIdx+1}. ${q.q}`;

  // shuffle answers, zachowując indeks
  const shuffled=q.a.map((text,orig)=>({text, orig}));
  shuffleArray(shuffled);

  ansBtns.forEach((b,i)=>{
    b.textContent=shuffled[i].text;
    b.dataset.idx=shuffled[i].orig;
    b.disabled=false;
    b.classList.remove('correct','wrong');
  });

  const p=Math.floor((qIdx/quizPart.length)*100);
  progressBar.style.width=p+'%';
  progressTxt.textContent=`Pytanie ${qIdx+1} z ${quizPart.length}`;
}

ansBtns.forEach(b=>{
  b.addEventListener('click',()=>{
    ansBtns.forEach(x=>x.disabled=true);
    const correct=quizPart[qIdx].c;
    const userAns=Number(b.dataset.idx);
    if(userAns===correct){
      b.classList.add('correct');
      confetti();
      qIdx++;
      checkSafe();
      setTimeout(showQ,1200);
    } else {
      b.classList.add('wrong');
      ansBtns.forEach(x=>{
        if(Number(x.dataset.idx)===correct) x.classList.add('correct');
      });
      finished=true;
      setTimeout(endGame,1700);
    }
  });
});

function checkSafe(){
  if(qIdx===3){ safeLvl=3; s3.classList.add('safeDone'); }
  if(qIdx===6){ safeLvl=6; s6.classList.add('safeDone'); }
}

function endGame(){
  qText.textContent='';
  ansBtns.forEach(b=>b.style.display='none');
  const msg=safeLvl>0 ? `Twój zabezpieczony poziom to po pytaniu nr ${safeLvl}.` : 'Niestety, nie osiągnąłeś żadnego z progów gwarantowanych.';
  resultEl.textContent=finished ? `Koniec gry, ${usr}! ${msg}` : `Gratulacje, ${usr}! Ukończyłeś grę!`;
  progressBar.style.width='100%';
  progressTxt.textContent='';
  restartBtn.style.display='inline-block';
}

function confetti(){
  const colors=['#7f8aff','#556cd6','#5c7aff','#2d48f9','#a3afff'];
  for(let i=0;i<40;i++){
    const c=document.createElement('div');
    c.className='confetti';
    c.style.left=Math.random()*window.innerWidth+'px';
    c.style.top='-10px';
    const size=(Math.random()*8+4)+'px';
    c.style.width=size; c.style.height=size;
    c.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)];
    c.style.animationDuration=(Math.random()*2+2)+'s';
    c.style.opacity=Math.random()+0.5;
    document.body.appendChild(c);
    c.addEventListener('animationend',()=>c.remove());
  }
}

function shuffleArray(arr){
  for(let i=arr.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]]=[arr[j],arr[i]];
  }
  return arr;
}
