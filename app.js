(function(){
"use strict";
var STR={
en:{
 u_d:"d",u_h:"h",u_m:"m",sec:"{s} SEC",
 tabPlay:"Play",tabRuns:"Runs",tabSet:"Settings",switchHabit:"Switch habit",
 lvl:"LVL {n}",breakChip:"{n}-DAY BREAK",
 storageErr:"This browser is blocking storage, so your runs will be lost when you close it.",
 demoNote:"<b>Sample data.</b> These runs are made up so you can look around.",demoStart:"Start my own game",
 cGoal:"GOAL",cBoss:"BOSS",cAttempt:"ATTEMPT",cRun:"RUN",cThis:"THIS RUN",
 capToBeat:"TO BEAT {d}",capLastBeaten:"LAST RUN BEATEN",capToGoal:"TO THE GOAL",capNext:"NEXT: {m}",capHP:"BOSS HP",capBeaten:"BEATEN!",
 leftDH:"{d}D {h}H LEFT",leftHM:"{h}H {m}M LEFT",
 clearedHead:"CHALLENGE<br>CLEARED",clearedBody:"{n} days without {x}. You did what you set out to do.",goGood:"Go for good",newGoal:"New goal",
 breakFirst:"<b>Attempt #1.</b> Reach {n} days to clear the challenge. If you slip, the next attempt only has to beat this one.",
 breakLast:"<b>{who} ended at {d}.</b> Outlast it, then keep going to day {n}.",
 breakWon:"<b>{who} beaten.</b> Now it's just you and day {n}.",
 whoAttempt:"Last attempt",whoRun:"Your last run",whoAttemptN:"Attempt #{n}",
 freeHead:"FREE",freeBody:"One full year. The habit lost. Keep the clock running as long as you like.",
 quitFirst:"<b>First run. No Boss yet.</b> Whatever you reach becomes the Boss to beat next time.",
 quitBoss:"<b>The Boss: your last run, {d}.</b> Outlast it and you reach level {n}.",
 quitWon:"<b>Boss beaten. Level {n} is yours.</b> Every extra minute now is a new high score for this run.",
 level:"Level {n}",chainMany:"{k} runs in a row, each longer than the one before",chainOne:"1 run longer than the one before",chainNone:"Beat the Boss to start a streak",
 questTitle:"No {x}, {n} days",lgDone:"done",lgToday:"today",lgCp:"weekly checkpoint",
 pb:"Personal best",pbNow:"Personal best, set right now",endedHere:"{who} ended here",passed:". Passed ✓",
 cravesRun:"Cravings beaten this run",savedRun:"Saved this run",savedTotal:"Saved in total",
 crave:"Beat a craving",slip:"I slipped",
 road:"Road to free",nextM:"{m} next",free:"FREE",
 yourRuns:"Your runs",runningNow:"Running now",bossBeatenTag:" · Boss beaten",settingBar:"Setting the bar",bossIs:"Boss: {d}",since:"since {t}",
 lvlUp:"Level up ▲ {n}",beat:"beat {d}",knock:"Knockdown ▼ 1",shortOf:"short of {d}",firstRun:"First run",
 longest:"Longest run ever",totalFree:"Total time free",bossesBeaten:"Bosses beaten",cravesAll:"Cravings beaten",
 cleared:"<b>Challenges cleared: {n}.</b> ",clearedItem:"{n} days ({d})",clearedNone:"Your first one is on the way.",
 milestonesHd:"Milestones from a single run",triggersHd:"<b>What sets it off most:</b> ",
 settings:"Settings",language:"Language",thisHabit:"This habit",icon:"Icon",name:"Name",mode:"Mode",modeQuit:"Quit for good",modeBreak:"Take a break",
 chLen:"Challenge length in days",runStarted:"This run started",runStartedNote:"Change this only to fix a mistake. It moves the start of the run you are on now.",saveChanges:"Save changes",
 money:"Money saved",showMoney:"Show money saved",showMoneyNote:"Off by default. Turn it on to count what you don't spend.",perDay:"Spent per day",currency:"Currency",egAmt:"e.g. 150",
 yourData:"Your data",dataNote:"Everything stays on this device. Copy a backup to keep it safe or move it to another phone.",copyBackup:"Copy backup",restoreBackup:"Restore backup",
 backup:"Backup",yourBackup:"Your backup",pasteBackup:"Paste your backup",restoreThis:"Restore from this text",copied:"Copied. Paste it somewhere safe, like a note to yourself.",selectCopy:"Select the text above and copy it.",
 restoreWarn:"Restoring replaces everything on this device.",importErr:"That text isn't a Play and Quit backup. Copy the whole backup and try again.",
 howWorks:"How the game works",r1:"<b>A run</b> is the time since you last did it.",r2:"<b>The Boss</b> is your last run. Outlast it to level up, and this run becomes the next Boss.",
 r3:"<b>A Knockdown</b> is a slip. If the run was shorter than the Boss, your level goes back to 1 and that shorter run is the new Boss. Your personal best always stays.",
 r4:"<b>Take a break</b> is a set challenge, like 30 days. Weekly checkpoints keep you going.",
 delHabit:"Delete this habit",delNote:"This deletes {x} and all its runs from this device.",keepIt:"Keep it",del:"Delete",footer:"Play and Quit · working title",
 eName:"Give the habit a name.",eStart:"Pick a start time.",eStartFuture:"The start can't be in the future.",eStartSlip:"The start can't be before your last slip ({t}).",
 eDays:"Pick a challenge length from 1 to 180 days.",ePickDT:"Pick a date and time.",eBeforeRun:"That's before this run started ({t}). Pick a later time.",
 eFuture:"That time is in the future. Pick a time up to now.",eWhen:"Pick when you last did it.",eGoal:"Pick a number between {a} and 365.",
 tSaved:"SAVED",tSavedB:"Your changes are saved.",tRestored:"RESTORED",tRestoredB:"Your backup is loaded.",tUndone:"UNDONE",tUndoneB:"The slip was removed. Your run continues.",
 tCrave:"+1 CRAVING BEATEN",craveCount:"({n} this run)",
 craveLines:["The craving swung. You blocked it.","Urge defeated. The run lives on.","That one didn't land. Keep going.","Craving down. Your score keeps climbing.","Blocked! Cravings pass, runs stay."],
 tGood:"MODE: QUIT FOR GOOD",tGoodB:"Your run keeps going. Next stop: 1 year free.",tNewGoal:"NEW GOAL",tNewGoalB:"{n} days. Your run keeps going.",
 tMode:"MODE CHANGED",tModeBreak:"{n}-day break. Your run keeps going.",tModeQuit:"Quit for good. Your run keeps going.",tRun1:"RUN #1 STARTED",tRun1B:"Your first run sets the bar.",
 logSlip:"Log a slip",slipAt:"Run #{r} is at {d}.",slipFirst:"This is your first run, so it will set the bar.",slipBoss:"The Boss is {d}.",
 whenHappen:"When did it happen?",whatSet:"What set it off? (optional)",note:"Note (optional)",notePh:"Anything to remember next time",cancel:"Cancel",logIt:"Log it",
 firstHead:"FIRST RUN<br>LOGGED",firstBody:"You set the bar. The next run only has to beat it.",firstNew:"First Boss: <b>{d}</b>. Go one minute longer and you reach level 2.",
 upHead:"BOSS<br>BEATEN",upBody:"You outlasted your last run. That's a level up, even with the slip.",upNew:"New Boss: <b>{d}</b>. This run is the one to beat now.",
 downHead:"KNOCK<br>DOWN",downBody:"This run fell short of the Boss. Get back up. Your next run only has to beat this one.",downNew:"New Boss: <b>{d}</b>. Go one minute longer and you're back to level 2.",
 levelCap:"LEVEL",pbStays:"Your personal best stays at {d}.",startRun:"▶ START RUN #{n}",startAttempt:"▶ START ATTEMPT #{n}",undo:"Undo, I logged this by mistake",
 yourGames:"Your games",dayBreak:"{n}-day break",quitLvl:"Quit for good · level {n}",addHabit:"+ Add a habit",
 goalTitle:"Set a new goal",goalNote:"Your run keeps going. Pick a longer finish line.",totalDays:"Total days",setGoal:"Set goal",
 newGame:"NEW GAME",q1:"What do you want to quit?",other:"Something else",otherPh:"e.g. Energy drinks",next:"Next",demo:"Look around with sample data",
 q2:"How do you want to play?",quitShort:"No end date. Final goal: 1 year free.",breakShort:"Stop for a set time, like 30 days.",
 week1:"1 week",nDays:"{n} days",q3:"When was the last time?",startRun1:"Start run #1",back:"Back",
 h_cig:"Cigarettes",h_alc:"Alcohol",h_scroll:"Social media",h_sugar:"Sugar",h_gamble:"Gambling",h_khat:"Khat",
 tag_Stress:"Stress",tag_Friends:"Friends",tag_Coffee:"Coffee",tag_Bored:"Bored",tag_Party:"Party",tag_Tired:"Tired",tag_Alone:"Alone",tag_Other:"Other",
 m1:"1d",m3:"3d",m7:"1w",m14:"2w",m30:"1m",m90:"3m",m182:"6m",m365:"1y",
 M1:"1 DAY",M3:"3 DAYS",M7:"1 WEEK",M14:"2 WEEKS",M30:"1 MONTH",M90:"3 MONTHS",M182:"6 MONTHS",M365:"1 YEAR",
 sample:"Sample"
},
am:{
 u_d:"ቀ",u_h:"ሰ",u_m:"ደ",sec:"{s} ሰከንድ",
 tabPlay:"ጨዋታ",tabRuns:"ዙሮች",tabSet:"ቅንብሮች",switchHabit:"ልማድ ይቀይሩ",
 lvl:"ደረጃ {n}",breakChip:"የ{n} ቀን እረፍት",
 storageErr:"ይህ አሳሽ መረጃ እንዳይቀመጥ እየከለከለ ነው፤ ሲዘጉት ዙሮችዎ ይጠፋሉ።",
 demoNote:"<b>የናሙና መረጃ።</b> እንዲያዩት ብቻ የተዘጋጁ ዙሮች ናቸው።",demoStart:"የራሴን ጨዋታ ልጀምር",
 cGoal:"ግብ",cBoss:"አለቃ",cAttempt:"ሙከራ",cRun:"ዙር",cThis:"ይህ ዙር",
 capToBeat:"የሚሸነፈው {d}",capLastBeaten:"ያለፈው ዙር ተሸንፏል",capToGoal:"ወደ ግቡ",capNext:"ቀጣይ፦ {m}",capHP:"የአለቃው ጉልበት",capBeaten:"ተሸነፈ!",
 leftDH:"{d}ቀ {h}ሰ ቀረ",leftHM:"{h}ሰ {m}ደ ቀረ",
 clearedHead:"ፈተናው<br>ተጠናቀቀ",clearedBody:"{n} ቀን ያለ {x}። ያሰቡትን አሳክተዋል።",goGood:"ለዘለቄታው ልቀጥል",newGoal:"አዲስ ግብ",
 breakFirst:"<b>ሙከራ #1።</b> ፈተናውን ለማጠናቀቅ {n} ቀን ይድረሱ። ቢያገረሽብዎ፣ ቀጣዩ ሙከራ ይህንን ብቻ ማለፍ አለበት።",
 breakLast:"<b>{who} በ{d} አብቅቷል።</b> ያንን ይለፉ፣ ከዚያ እስከ ቀን {n} ይቀጥሉ።",
 breakWon:"<b>{who} ተሸንፏል።</b> አሁን የቀረው እርስዎ እና ቀን {n} ብቻ ነው።",
 whoAttempt:"ያለፈው ሙከራ",whoRun:"ያለፈው ዙርዎ",whoAttemptN:"ሙከራ #{n}",
 freeHead:"ነፃ",freeBody:"ሙሉ አንድ ዓመት። ልማዱ ተሸንፏል። ሰዓቱ እስከፈለጉት ድረስ ይቀጥል።",
 quitFirst:"<b>የመጀመሪያ ዙር። ገና አለቃ የለም።</b> የሚደርሱበት ጊዜ በሚቀጥለው የሚሸነፈው አለቃ ይሆናል።",
 quitBoss:"<b>አለቃው፦ ያለፈው ዙርዎ፣ {d}።</b> ካለፉት ደረጃ {n} ላይ ይደርሳሉ።",
 quitWon:"<b>አለቃው ተሸንፏል። ደረጃ {n} የእርስዎ ነው።</b> ከአሁን በኋላ እያንዳንዷ ደቂቃ ለዚህ ዙር አዲስ ሪከርድ ናት።",
 level:"ደረጃ {n}",chainMany:"{k} ዙሮች በተከታታይ፣ እያንዳንዱ ከቀደመው የረዘመ",chainOne:"1 ዙር ከቀደመው የረዘመ",chainNone:"ተከታታይነት ለመጀመር አለቃውን ያሸንፉ",
 questTitle:"ያለ {x}፣ {n} ቀን",lgDone:"የተጠናቀቀ",lgToday:"ዛሬ",lgCp:"ሳምንታዊ ምዕራፍ",
 pb:"ምርጥ ሪከርድ",pbNow:"ምርጥ ሪከርድ፣ አሁን የተመዘገበ",endedHere:"{who} እዚህ አበቃ",passed:"። አልፈዋል ✓",
 cravesRun:"በዚህ ዙር ያሸነፉት ፍላጎት",savedRun:"በዚህ ዙር የተቆጠበ",savedTotal:"በአጠቃላይ የተቆጠበ",
 crave:"ፍላጎቱን አሸነፍኩ",slip:"አገረሸብኝ",
 road:"ወደ ነፃነት",nextM:"ቀጣይ፦ {m}",free:"ነፃ",
 yourRuns:"ዙሮችዎ",runningNow:"አሁን እየሄደ",bossBeatenTag:" · አለቃው ተሸንፏል",settingBar:"መለኪያውን እያስቀመጠ",bossIs:"አለቃ፦ {d}",since:"ከ{t} ጀምሮ",
 lvlUp:"ደረጃ ጨመረ ▲ {n}",beat:"{d}ን አሸነፈ",knock:"ውድቀት ▼ 1",shortOf:"ከ{d} አጠረ",firstRun:"የመጀመሪያ ዙር",
 longest:"ረጅሙ ዙር",totalFree:"በአጠቃላይ ነፃ የሆኑበት ጊዜ",bossesBeaten:"የተሸነፉ አለቆች",cravesAll:"የተሸነፉ ፍላጎቶች",
 cleared:"<b>የተጠናቀቁ ፈተናዎች፦ {n}።</b> ",clearedItem:"{n} ቀን ({d})",clearedNone:"የመጀመሪያው እየመጣ ነው።",
 milestonesHd:"በአንድ ዙር የተደረሱ ምዕራፎች",triggersHd:"<b>በብዛት የሚያስነሳው፦</b> ",
 settings:"ቅንብሮች",language:"ቋንቋ",thisHabit:"ይህ ልማድ",icon:"ምልክት",name:"ስም",mode:"ሁኔታ",modeQuit:"ለዘለቄታው ማቆም",modeBreak:"ለጊዜው ማቆም",
 chLen:"የፈተናው ርዝመት በቀናት",runStarted:"ይህ ዙር የጀመረው",runStartedNote:"ስህተት ለማስተካከል ብቻ ይቀይሩት። የአሁኑን ዙር መጀመሪያ ያንቀሳቅሳል።",saveChanges:"ለውጦቹን አስቀምጥ",
 money:"የተቆጠበ ገንዘብ",showMoney:"የተቆጠበ ገንዘብ አሳይ",showMoneyNote:"በነባሪ ጠፍቷል። ያላወጡትን ገንዘብ ለመቁጠር ያብሩት።",perDay:"በቀን የሚያወጡት",currency:"የገንዘብ ዓይነት",egAmt:"ለምሳሌ 150",
 yourData:"የእርስዎ መረጃ",dataNote:"ሁሉም ነገር በዚህ መሣሪያ ላይ ብቻ ይቀመጣል። ለጥንቃቄ ወይም ወደ ሌላ ስልክ ለማዛወር ምትኬ ይቅዱ።",copyBackup:"ምትኬ ቅዳ",restoreBackup:"ምትኬ መልስ",
 backup:"ምትኬ",yourBackup:"ምትኬዎ",pasteBackup:"ምትኬዎን እዚህ ይለጥፉ",restoreThis:"ከዚህ ጽሑፍ መልስ",copied:"ተቀድቷል። ደህንነቱ በተጠበቀ ቦታ ይለጥፉት።",selectCopy:"ከላይ ያለውን ጽሑፍ መርጠው ይቅዱት።",
 restoreWarn:"መመለስ በዚህ መሣሪያ ያለውን ሁሉ ይተካል።",importErr:"ይህ ጽሑፍ የPlay and Quit ምትኬ አይደለም። ሙሉውን ምትኬ ቀድተው እንደገና ይሞክሩ።",
 howWorks:"ጨዋታው እንዴት ይሠራል",r1:"<b>ዙር</b> ማለት ለመጨረሻ ጊዜ ካደረጉት በኋላ ያለፈው ጊዜ ነው።",r2:"<b>አለቃው</b> ያለፈው ዙርዎ ነው። ካለፉት ደረጃዎ ይጨምራል፣ ይህ ዙርም ቀጣዩ አለቃ ይሆናል።",
 r3:"<b>ውድቀት</b> ማለት ማገርሸት ነው። ዙሩ ከአለቃው ካጠረ ደረጃዎ ወደ 1 ይመለሳል፣ ያ አጭር ዙርም አዲሱ አለቃ ይሆናል። ምርጥ ሪከርድዎ ሁልጊዜ ይቆያል።",
 r4:"<b>ለጊዜው ማቆም</b> እንደ 30 ቀን ያለ የተወሰነ ፈተና ነው። ሳምንታዊ ምዕራፎች ያበረታታሉ።",
 delHabit:"ይህን ልማድ ሰርዝ",delNote:"ይህ {x}ን እና ዙሮቹን በሙሉ ከዚህ መሣሪያ ይሰርዛል።",keepIt:"ይቆይ",del:"ሰርዝ",footer:"Play and Quit · ጊዜያዊ ስም",
 eName:"ለልማዱ ስም ይስጡት።",eStart:"የመጀመሪያ ሰዓት ይምረጡ።",eStartFuture:"መጀመሪያው ወደፊት ሊሆን አይችልም።",eStartSlip:"መጀመሪያው ከመጨረሻው ማገርሸት ({t}) በፊት ሊሆን አይችልም።",
 eDays:"ከ1 እስከ 180 ቀን ያለ ርዝመት ይምረጡ።",ePickDT:"ቀን እና ሰዓት ይምረጡ።",eBeforeRun:"ይህ ዙሩ ከጀመረበት ({t}) በፊት ነው። የኋላ ሰዓት ይምረጡ።",
 eFuture:"ያ ሰዓት ገና አልደረሰም። እስከ አሁን ያለ ሰዓት ይምረጡ።",eWhen:"ለመጨረሻ ጊዜ መቼ እንደነበር ይምረጡ።",eGoal:"ከ{a} እስከ 365 ያለ ቁጥር ይምረጡ።",
 tSaved:"ተቀምጧል",tSavedB:"ለውጦችዎ ተቀምጠዋል።",tRestored:"ተመልሷል",tRestoredB:"ምትኬዎ ተጭኗል።",tUndone:"ተቀልብሷል",tUndoneB:"ማገርሸቱ ተሰርዟል። ዙርዎ ይቀጥላል።",
 tCrave:"+1 ፍላጎት ተሸንፏል",craveCount:"(በዚህ ዙር {n})",
 craveLines:["ፍላጎቱ መጣ፣ እርስዎ መከቱት።","ፍላጎቱ ተሸንፏል። ዙሩ ይቀጥላል።","ያ አልያዘዎትም። ይቀጥሉ።","ፍላጎቱ ወደቀ። ውጤትዎ እያደገ ነው።","ተመክቷል! ፍላጎቶች ያልፋሉ፣ ዙሮች ይቆያሉ።"],
 tGood:"ሁኔታ፦ ለዘለቄታው ማቆም",tGoodB:"ዙርዎ ይቀጥላል። ቀጣዩ መዳረሻ፦ 1 ዓመት ነፃ።",tNewGoal:"አዲስ ግብ",tNewGoalB:"{n} ቀን። ዙርዎ ይቀጥላል።",
 tMode:"ሁኔታ ተቀይሯል",tModeBreak:"የ{n} ቀን እረፍት። ዙርዎ ይቀጥላል።",tModeQuit:"ለዘለቄታው ማቆም። ዙርዎ ይቀጥላል።",tRun1:"ዙር #1 ተጀመረ",tRun1B:"የመጀመሪያው ዙርዎ መለኪያውን ያስቀምጣል።",
 logSlip:"ማገርሸት ይመዝግቡ",slipAt:"ዙር #{r} {d} ላይ ነው።",slipFirst:"ይህ የመጀመሪያ ዙርዎ ስለሆነ መለኪያውን ያስቀምጣል።",slipBoss:"አለቃው {d} ነው።",
 whenHappen:"መቼ ነበር?",whatSet:"ምን አስነሳው? (አማራጭ)",note:"ማስታወሻ (አማራጭ)",notePh:"በሚቀጥለው ለማስታወስ",cancel:"ይቅር",logIt:"መዝግብ",
 firstHead:"የመጀመሪያ ዙር<br>ተመዘገበ",firstBody:"መለኪያውን አስቀምጠዋል። ቀጣዩ ዙር ይህንን ብቻ ማለፍ አለበት።",firstNew:"የመጀመሪያው አለቃ፦ <b>{d}</b>። አንድ ደቂቃ ከረዘሙ ደረጃ 2 ይደርሳሉ።",
 upHead:"አለቃው<br>ተሸነፈ",upBody:"ያለፈውን ዙርዎን አልፈዋል። ቢያገረሽብዎትም ደረጃዎ ጨምሯል።",upNew:"አዲሱ አለቃ፦ <b>{d}</b>። አሁን የሚሸነፈው ይህ ዙር ነው።",
 downHead:"ውድቀት",downBody:"ይህ ዙር ከአለቃው አጠረ። ይነሱ። ቀጣዩ ዙርዎ ይህንን ብቻ ማለፍ አለበት።",downNew:"አዲሱ አለቃ፦ <b>{d}</b>። አንድ ደቂቃ ከረዘሙ ወደ ደረጃ 2 ይመለሳሉ።",
 levelCap:"ደረጃ",pbStays:"ምርጥ ሪከርድዎ {d} ሆኖ ይቆያል።",startRun:"▶ ዙር #{n} ጀምር",startAttempt:"▶ ሙከራ #{n} ጀምር",undo:"ቀልብስ፣ በስህተት ነው የመዘገብኩት",
 yourGames:"ጨዋታዎችዎ",dayBreak:"የ{n} ቀን እረፍት",quitLvl:"ለዘለቄታው · ደረጃ {n}",addHabit:"+ ልማድ ጨምር",
 goalTitle:"አዲስ ግብ ያስቀምጡ",goalNote:"ዙርዎ ይቀጥላል። ረዘም ያለ መድረሻ ይምረጡ።",totalDays:"ጠቅላላ ቀናት",setGoal:"ግብ አስቀምጥ",
 newGame:"አዲስ ጨዋታ",q1:"ምን ማቆም ይፈልጋሉ?",other:"ሌላ ነገር",otherPh:"ለምሳሌ ኢነርጂ መጠጥ",next:"ቀጣይ",demo:"በናሙና መረጃ ይመልከቱ",
 q2:"እንዴት መጫወት ይፈልጋሉ?",quitShort:"ማብቂያ ቀን የለውም። የመጨረሻ ግብ፦ 1 ዓመት ነፃ።",breakShort:"ለተወሰነ ጊዜ ያቁሙ፣ ለምሳሌ 30 ቀን።",
 week1:"1 ሳምንት",nDays:"{n} ቀን",q3:"ለመጨረሻ ጊዜ መቼ ነበር?",startRun1:"ዙር #1 ጀምር",back:"ተመለስ",
 h_cig:"ሲጋራ",h_alc:"አልኮል",h_scroll:"ማህበራዊ ሚዲያ",h_sugar:"ስኳር",h_gamble:"ቁማር",h_khat:"ጫት",
 tag_Stress:"ጭንቀት",tag_Friends:"ጓደኞች",tag_Coffee:"ቡና",tag_Bored:"መሰላቸት",tag_Party:"ድግስ",tag_Tired:"ድካም",tag_Alone:"ብቸኝነት",tag_Other:"ሌላ",
 m1:"1ቀ",m3:"3ቀ",m7:"1ሳ",m14:"2ሳ",m30:"1ወ",m90:"3ወ",m182:"6ወ",m365:"1ዓ",
 M1:"1 ቀን",M3:"3 ቀን",M7:"1 ሳምንት",M14:"2 ሳምንት",M30:"1 ወር",M90:"3 ወር",M182:"6 ወር",M365:"1 ዓመት",
 sample:"ናሙና"
}};
var KEY="playquit.v1", DAY=864e5, HOUR=36e5, MIN=6e4;
var MILESTONES=[1,3,7,14,30,90,182,365];
var PRESETS=[{k:"cig",e:"🚬",en:"Cigarettes"},{k:"alc",e:"🍺",en:"Alcohol"},{k:"khat",e:"🌿",en:"Khat"},{k:"scroll",e:"📱",en:"Doomscrolling"},{k:"sugar",e:"🍬",en:"Sugar"},{k:"gamble",e:"🎲",en:"Gambling"}];
var TAGS=["Stress","Friends","Coffee","Bored","Party","Tired","Alone","Other"];

var storageOK=true, S=load(), tab="play", ui={}, tickTimer=null, toastTimer=null, undoSnap=null;
var ob=freshOb();
function freshOb(){return {step:1,preset:null,name:"",emoji:"⭐",mode:null,days:30,when:null}}

/* ---------- language ---------- */
function lang(){return S.lang==="am"?"am":"en"}
function t(k,v){var s=STR[lang()][k];if(s==null)s=STR.en[k];if(s==null)return k;if(v)s=s.replace(/\{(\w+)\}/g,function(m,n){return v[n]!=null?v[n]:m});return s}
function loc(){return lang()==="am"?"am-ET":undefined}
function hname(h){return h.preset?t("h_"+h.preset):h.name}
function tagName(k){return TAGS.indexOf(k)>=0?t("tag_"+k):k}

/* ---------- storage ---------- */
function load(){
  try{var raw=localStorage.getItem(KEY); if(raw){var d=clean(JSON.parse(raw)); if(d) return d;}}catch(e){storageOK=false}
  var l="en";try{if(/^am\b/i.test(navigator.language||""))l="am"}catch(e){}
  return {v:1,lang:l,active:null,habits:[]};
}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){storageOK=false}}
/* Rebuild saved or restored data field by field, so only known fields with the right types get in. */
function num(v,min,max,def){v=Number(v);return isFinite(v)?Math.min(max,Math.max(min,v)):def}
function str(v,max){return typeof v==="string"?v.slice(0,max):""}
var T_MAX=4102444800000; /* year 2100 */
function presetKey(k,name){for(var i=0;i<PRESETS.length;i++){if(PRESETS[i].k===k||(!k&&PRESETS[i].en===name))return PRESETS[i].k}return ""}
function clean(d){
  if(!d||typeof d!=="object"||!Array.isArray(d.habits))return null;
  var habits=d.habits.slice(0,50).map(function(h){
    if(!h||typeof h!=="object")return null;
    var start=num(h.start,0,T_MAX,NaN);if(isNaN(start))return null;
    var runs=(Array.isArray(h.runs)?h.runs:[]).slice(0,5000).map(function(r){
      if(!r||typeof r!=="object")return null;var a=num(r.s,0,T_MAX,NaN),b=num(r.e,0,T_MAX,NaN);if(isNaN(a)||isNaN(b)||b<a)return null;
      var out=["first","up","down"].indexOf(r.out)>=0?r.out:"down";
      return {s:a,e:b,out:out,boss:r.boss==null?null:num(r.boss,0,T_MAX,0),lvl:Math.round(num(r.lvl,1,1e5,1)),tag:str(r.tag,20),note:str(r.note,80),mode:r.mode==="break"?"break":"quit"};
    }).filter(Boolean);
    var m=h.money&&typeof h.money==="object"?h.money:{};
    var name=str(h.name,30)||"Habit";
    return {id:str(h.id,20).replace(/[^a-z0-9]/gi,"")||uid(),name:name,preset:presetKey(str(h.preset,10),h.preset===""?null:name),emoji:str(h.emoji,8)||"⭐",
      mode:h.mode==="break"?"break":"quit",days:Math.round(num(h.days,1,365,30)),start:start,level:Math.round(num(h.level,1,1e5,1)),runs:runs,
      cravings:(Array.isArray(h.cravings)?h.cravings:[]).slice(-20000).map(function(x){return num(x,0,T_MAX,NaN)}).filter(function(x){return !isNaN(x)}),
      money:{on:m.on===true,amt:num(m.amt,0,1e9,0),cur:str(m.cur,5)},chFrom:Math.round(num(h.chFrom,0,runs.length,0)),
      cleared:(Array.isArray(h.cleared)?h.cleared:[]).slice(0,1000).map(function(c){return c&&typeof c==="object"?{at:num(c.at,0,T_MAX,0),days:Math.round(num(c.days,1,365,30))}:null}).filter(Boolean),
      demo:h.demo===true};
  }).filter(Boolean);
  var active=str(d.active,20);
  return {v:1,lang:d.lang==="am"?"am":"en",active:habits.some(function(h){return h.id===active})?active:(habits[0]?habits[0].id:null),habits:habits};
}
function uid(){return Math.random().toString(36).slice(2,9)}
function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function p2(n){return String(n).padStart(2,"0")}
function H(){for(var i=0;i<S.habits.length;i++){if(S.habits[i].id===S.active)return S.habits[i]} return S.habits[0]||null}
function now(){return Date.now()}

/* ---------- time formatting ---------- */
function dur(ms){
  ms=Math.max(0,ms); var d=Math.floor(ms/DAY),h=Math.floor(ms%DAY/HOUR),m=Math.floor(ms%HOUR/MIN);
  if(d>0) return d+t("u_d")+" "+h+t("u_h"); if(h>0) return h+t("u_h")+" "+m+t("u_m"); return m+t("u_m");
}
function clock(ms){var d=Math.floor(ms/DAY),h=Math.floor(ms%DAY/HOUR),m=Math.floor(ms%HOUR/MIN);return p2(d)+":"+p2(h)+":"+p2(m)}
function scoreHTML(ms){ms=Math.max(0,ms);var d=Math.floor(ms/DAY),h=Math.floor(ms%DAY/HOUR),m=Math.floor(ms%HOUR/MIN);
  return p2(d)+"<small>"+t("u_d")+"</small>"+p2(h)+"<small>"+t("u_h")+"</small>"+p2(m)+"<small>"+t("u_m")+"</small>"}
function secs(ms){return p2(Math.floor(Math.max(0,ms)/1000)%60)}
function dateStr(x){return new Date(x).toLocaleDateString(loc(),{day:"numeric",month:"short"})}
function dtStr(x){var d=new Date(x);return d.toLocaleDateString(loc(),{day:"numeric",month:"short"})+", "+d.toLocaleTimeString(loc(),{hour:"2-digit",minute:"2-digit"})}
function toLocalInput(x){var d=new Date(x);return d.getFullYear()+"-"+p2(d.getMonth()+1)+"-"+p2(d.getDate())+"T"+p2(d.getHours())+":"+p2(d.getMinutes())}
function fromLocalInput(v){if(!v)return NaN;return new Date(v).getTime()}

/* ---------- game rules ---------- */
function runLen(r){return r.e-r.s}
function boss(h){return h.runs.length?runLen(h.runs[h.runs.length-1]):null}
function elapsed(h){return now()-h.start}
function best(h){var b=elapsed(h);h.runs.forEach(function(r){b=Math.max(b,runLen(r))});return b}
function bestPast(h){var b=0;h.runs.forEach(function(r){b=Math.max(b,runLen(r))});return b}
function totalFree(h){var x=elapsed(h);h.runs.forEach(function(r){x+=runLen(r)});return x}
function beaten(h){var b=boss(h);return b!=null&&elapsed(h)>b}
function shownLevel(h){return h.level+(beaten(h)?1:0)}
function runNo(h){return h.runs.length+1}
function attemptNo(h){return h.runs.length-(h.chFrom||0)+1}
function goalMs(h){return h.days*DAY}
function cravesThisRun(h){return h.cravings.filter(function(x){return x>=h.start}).length}

function logSlip(h,when,tag,note){
  var len=when-h.start,b=boss(h),prev=h.level,out,lvl;
  if(b==null){out="first";lvl=1}
  else if(len>b){out="up";lvl=h.level+1}
  else{out="down";lvl=1}
  h.runs.push({s:h.start,e:when,out:out,boss:b,lvl:lvl,tag:tag||"",note:note||"",mode:h.mode});
  h.level=lvl;h.start=when;
  return {out:out,len:len,boss:b,prev:prev,lvl:lvl};
}

/* ---------- rendering ---------- */
var app=document.getElementById("app"),layer=document.getElementById("layer");

function render(){
  clearInterval(tickTimer);
  document.documentElement.lang=lang();
  var h=H();
  if(!h||ui.onboarding){app.className="app nonav";app.innerHTML=onboardHTML();renderTabs(false);return}
  app.className="app";
  if(tab==="play")app.innerHTML=playHTML(h);
  else if(tab==="runs")app.innerHTML=runsHTML(h);
  else app.innerHTML=settingsHTML(h);
  renderTabs(true);
  if(tab==="play"){tick();tickTimer=setInterval(tick,1000)}
  if(tab==="runs"){tickTimer=setInterval(function(){var el=document.getElementById("liveLen");if(el)el.textContent=dur(elapsed(h))},15000)}
}

function topHTML(h,right){
  return '<div class="top"><button class="habit" data-act="habits" aria-label="'+t("switchHabit")+'"><i>'+esc(h.emoji)+'</i><span>'+esc(hname(h))+'</span><span class="car">▼</span></button>'+right+'</div>';
}

function playHTML(h){
  var b=boss(h),isBreak=h.mode==="break",out=[];
  var chip=isBreak?'<div class="lvl">'+t("breakChip",{n:h.days})+'</div>':'<div class="lvl" id="lvlChip">'+t("lvl",{n:shownLevel(h)})+'</div>';
  out.push(topHTML(h,chip));
  if(!storageOK)out.push('<p class="err">'+t("storageErr")+'</p>');
  if(h.demo)out.push('<div class="say">'+t("demoNote")+' <button class="link" data-act="cleardemo">'+t("demoStart")+'</button></div>');
  var leftLab=isBreak?t("cGoal"):t("cBoss"), leftVal=isBreak?clock(goalMs(h)):(b==null?"--:--:--":clock(b));
  var rightLab=isBreak?t("cAttempt"):t("cRun"), rightVal="#"+(isBreak?attemptNo(h):runNo(h));
  out.push('<div class="cab"><div class="row"><div>'+leftLab+'<b>'+leftVal+'</b></div><div class="r">'+rightLab+'<b>'+rightVal+'</b></div></div>'+
    '<div class="lab">'+t("cThis")+'</div><div class="score" id="score"></div><div class="sec" id="sec"></div>'+
    '<div class="blocks" id="blocks">'+new Array(21).join("<i></i>")+'</div><div class="cap"><span id="capL"></span><b id="capR"></b></div></div>');
  out.push('<div id="status"></div>');
  if(isBreak){
    out.push('<div id="quest"></div>');
  }else{
    var L=h.level;
    var pips="";for(var i=0;i<Math.min(L,9);i++)pips+='<span class="pip on"></span>';pips+='<span class="pip now"></span>';
    out.push('<div class="chain"><div class="t"><b>'+t("level",{n:L})+'</b>'+(L>2?t("chainMany",{k:L-1}):L===2?t("chainOne"):t("chainNone"))+'</div><div class="pips">'+pips+'</div></div>');
    out.push('<div class="trail" id="trail"></div>');
  }
  out.push('<div class="mini" id="mini"></div>');
  out.push('<div class="row2"><button class="btn ghost" data-act="crave">'+t("crave")+'</button><button class="btn" data-act="slip">'+t("slip")+'</button></div>');
  return '<div class="view">'+out.join("")+'</div>';
}

function tick(){
  var h=H();if(!h)return;
  var e=elapsed(h),b=boss(h),isBreak=h.mode==="break";
  var sc=document.getElementById("score");if(!sc)return;
  sc.innerHTML=scoreHTML(e);
  document.getElementById("sec").textContent=t("sec",{s:secs(e)});
  var bl=document.getElementById("blocks"),capL=document.getElementById("capL"),capR=document.getElementById("capR");
  var target,pct,won=false;
  if(b!=null){target=b;pct=e/b;won=e>b}else{target=isBreak?goalMs(h):nextMilestone(e)*DAY;pct=e/target}
  if(isBreak){
    if(b!=null&&!won)capL.textContent=t("capToBeat",{d:dur(b)});
    else capL.textContent=won?t("capLastBeaten"):t("capToGoal");
  }else capL.textContent=b==null?t("capNext",{m:t("M"+nextMilestone(e))}):t("capHP");
  if(won){capR.textContent=t("capBeaten");capR.className="won beaten"}
  else{capR.className="";capR.textContent=fmtLeft(target-e)}
  var on=Math.min(20,Math.floor(Math.max(0,won?1:pct)*20));
  bl.className="blocks"+(won?" won":"");
  Array.prototype.forEach.call(bl.children,function(el,i){el.className=won?"":(i<on?"on":(i===19&&b!=null?"flag":""))});
  var chip=document.getElementById("lvlChip");if(chip)chip.textContent=t("lvl",{n:shownLevel(h)});
  var st=document.getElementById("status"),html,nm=esc(hname(h));
  if(isBreak){
    var who=attemptNo(h)>1?t("whoAttempt"):t("whoRun");
    if(e>=goalMs(h)) html='<div class="banner"><h3>'+t("clearedHead")+'</h3><p>'+t("clearedBody",{n:h.days,x:lang()==="en"?nm.toLowerCase():nm})+'</p><div class="row2"><button class="btn amber" data-act="goodmode">'+t("goGood")+'</button><button class="btn ghost" data-act="newgoal">'+t("newGoal")+'</button></div></div>';
    else if(b==null) html='<div class="say">'+t("breakFirst",{n:h.days})+'</div>';
    else if(!won) html='<div class="say">'+t("breakLast",{who:who,d:dur(b),n:h.days})+'</div>';
    else html='<div class="say win">'+t("breakWon",{who:who,n:h.days})+'</div>';
  }else{
    if(e>=365*DAY) html='<div class="banner"><h3>'+t("freeHead")+'</h3><p>'+t("freeBody")+'</p></div>';
    else if(b==null) html='<div class="say">'+t("quitFirst")+'</div>';
    else if(!won) html='<div class="say">'+t("quitBoss",{d:dur(b),n:h.level+1})+'</div>';
    else html='<div class="say win">'+t("quitWon",{n:h.level+1})+'</div>';
  }
  if(st.dataset.k!==html){st.innerHTML=html;st.dataset.k=html}
  if(isBreak){
    var q=document.getElementById("quest"),N=h.days,today=Math.min(N,Math.floor(e/DAY)+1),cells="",done=e>=goalMs(h);
    for(var i=1;i<=N;i++){var c=i<today||done?"ok":(i===today?"today":"");if(i===N&&c!=="ok")c="goal";if(i%7===0&&i!==N)c+=" cp";cells+='<i class="'+c+'">'+i+'</i>'}
    var qk=N+"|"+today+"|"+done+"|"+lang();
    if(q.dataset.k!==qk){
      q.dataset.k=qk;
      q.innerHTML='<div class="quest"><div class="hd"><b>'+t("questTitle",{x:lang()==="en"?nm.toLowerCase():nm,n:N})+'</b><span>'+Math.min(N,Math.floor(e/DAY))+' / '+N+'</span></div><div class="days" style="grid-template-columns:repeat('+Math.min(N,10)+',1fr)">'+cells+'</div><div class="legend"><span style="--c:var(--good)">'+t("lgDone")+'</span><span style="--c:var(--amber)">'+t("lgToday")+'</span>'+(N>=14?'<span class="cpk">'+t("lgCp")+'</span>':'')+'</div></div>';
    }
  }else{
    var tr=document.getElementById("trail"),tk=Math.floor(e/MIN)+lang();
    if(tr.dataset.k!==tk){tr.dataset.k=tk;tr.innerHTML=trailHTML(e)}
  }
  var mini=document.getElementById("mini"),cells2=[],pb=bestPast(h);
  cells2.push('<div><b>'+dur(Math.max(pb,e))+'</b>'+(e>pb&&pb?t("pbNow"):t("pb"))+'</div>');
  if(isBreak&&b!=null) cells2.push('<div><b>'+dur(b)+'</b>'+t("endedHere",{who:attemptNo(h)>1?t("whoAttemptN",{n:attemptNo(h)-1}):t("whoRun")})+(e>b?t("passed"):'')+'</div>');
  else cells2.push('<div><b>'+cravesThisRun(h)+'</b>'+t("cravesRun")+'</div>');
  if(h.money&&h.money.on&&h.money.amt>0){
    cells2.push('<div><b>'+money(h,e)+'</b>'+t("savedRun")+'</div>');
    cells2.push('<div><b>'+money(h,totalFree(h))+'</b>'+t("savedTotal")+'</div>');
  }
  var mk=cells2.join("");if(mini.dataset.k!==mk){mini.innerHTML=mk;mini.dataset.k=mk}
}
function money(h,ms){var v=ms/DAY*h.money.amt;return (h.money.cur?esc(h.money.cur)+" ":"")+(v>=100?Math.round(v).toLocaleString():v.toFixed(2))}
function fmtLeft(ms){var hh=Math.floor(ms/HOUR),mm=Math.floor(ms%HOUR/MIN);if(hh>=48)return t("leftDH",{d:Math.floor(hh/24),h:hh%24});return t("leftHM",{h:hh,m:p2(mm)})}
function nextMilestone(e){for(var i=0;i<MILESTONES.length;i++){if(e<MILESTONES[i]*DAY)return MILESTONES[i]}return 365}

function trailHTML(e){
  var n=MILESTONES.length,x0=10,x1=246,step=(x1-x0)/(n-1),pos=x0,next=null;
  for(var i=0;i<n;i++){var m=MILESTONES[i];if(e>=m*DAY){pos=x0+i*step}else{if(i>0){var prevD=MILESTONES[i-1],f=(e/DAY-prevD)/(m-prevD);pos=x0+(i-1)*step+Math.max(0,f)*step}next=m;break}}
  if(next==null)pos=x1;
  var s='<div class="cap2"><span>'+t("road")+'</span><span>'+(next!=null?t("nextM",{m:t("M"+next)}):t("free"))+'</span></div><svg viewBox="0 0 256 42" role="img" aria-label="'+t("road")+'">';
  s+='<line x1="'+x0+'" y1="16" x2="'+x1+'" y2="16" stroke="var(--track)" stroke-width="4" stroke-linecap="round"/>';
  s+='<line x1="'+x0+'" y1="16" x2="'+Math.max(x0,pos).toFixed(1)+'" y2="16" stroke="var(--xp)" stroke-width="4" stroke-linecap="round"/>';
  for(var j=0;j<n;j++){var cx=x0+j*step,got=e>=MILESTONES[j]*DAY,isNext=next===MILESTONES[j],last=j===n-1;
    if(last) s+='<rect x="'+(cx-8)+'" y="8" width="16" height="16" rx="3" fill="'+(got?'var(--pink)':'var(--card)')+'" stroke="var(--pink)" stroke-width="2"/>';
    else s+='<circle cx="'+cx+'" cy="16" r="5.5" fill="'+(got?'var(--xp)':(isNext?'var(--card)':'var(--track)'))+'"'+(isNext?' stroke="var(--xp)" stroke-width="2"':'')+'/>';
    s+='<text x="'+cx+'" y="38" font-size="8.5" fill="'+(last?'var(--pink)':(isNext?'var(--tx)':'var(--mu)'))+'" font-family="DM Sans,Noto Sans Ethiopic,sans-serif" font-weight="'+(isNext||last?700:400)+'" text-anchor="middle">'+(last?t("free"):t("m"+MILESTONES[j]))+'</text>';}
  return s+'</svg>';
}

function runsHTML(h){
  var out=[topHTML(h,'<div class="lvl">'+t("lvl",{n:shownLevel(h)})+'</div>'),'<h1 class="h">'+t("yourRuns")+'</h1>'];
  var e=elapsed(h),b=boss(h),rungs=[];
  rungs.push('<div class="rung live"><span class="n">#'+runNo(h)+'</span><span class="t"><b>'+t("runningNow")+(beaten(h)?t("bossBeatenTag"):'')+'</b>'+(b==null?t("settingBar"):t("bossIs",{d:dur(b)}))+' · '+t("since",{t:dtStr(h.start)})+'</span><span class="d" id="liveLen">'+dur(e)+'</span></div>');
  for(var i=h.runs.length-1;i>=0;i--){
    var r=h.runs[i],x,cls;
    if(r.out==="up"){cls="up";x='<b>'+t("lvlUp",{n:r.lvl})+'</b>'+t("beat",{d:dur(r.boss)})}
    else if(r.out==="down"){cls="down";x='<b>'+t("knock")+'</b>'+t("shortOf",{d:dur(r.boss)})}
    else{cls="";x='<b>'+t("firstRun")+'</b>'+dateStr(r.s)+' – '+dateStr(r.e)}
    if(r.tag)x+=' · '+esc(tagName(r.tag));
    if(r.note)x+=' · “'+esc(r.note)+'”';
    rungs.push('<div class="rung '+cls+'"><span class="n">#'+(i+1)+'</span><span class="t">'+x+'</span><span class="d">'+dur(runLen(r))+'</span></div>');
  }
  out.push('<div class="ladder">'+rungs.join("")+'</div>');
  var ups=h.runs.filter(function(r){return r.out==="up"}).length;
  out.push('<div class="mini"><div><b>'+dur(best(h))+'</b>'+t("longest")+'</div><div><b>'+dur(totalFree(h))+'</b>'+t("totalFree")+'</div><div><b>'+ups+'</b>'+t("bossesBeaten")+'</div><div><b>'+h.cravings.length+'</b>'+t("cravesAll")+'</div></div>');
  if(h.mode==="break"||h.cleared.length){
    out.push('<div class="say">'+t("cleared",{n:h.cleared.length})+(h.cleared.length?h.cleared.map(function(c){return t("clearedItem",{n:c.days,d:dateStr(c.at)})}).join(", "):t("clearedNone"))+'</div>');
  }
  if(h.mode==="quit"){
    var bb=best(h);
    out.push('<div class="sect">'+t("milestonesHd")+'</div><div class="goals">'+MILESTONES.map(function(m,i){var got=bb>=m*DAY,last=i===MILESTONES.length-1;return '<span class="'+(last?'boss ':'')+(got?'got':'')+'">'+t("M"+m)+(last?' · '+t("free"):'')+'</span>'}).join("")+'</div>');
  }
  var tags={};h.runs.forEach(function(r){if(r.tag)tags[r.tag]=(tags[r.tag]||0)+1});
  var tk=Object.keys(tags).sort(function(a,c){return tags[c]-tags[a]});
  if(tk.length)out.push('<div class="say">'+t("triggersHd")+tk.slice(0,3).map(function(k){return esc(tagName(k))+' ('+tags[k]+')'}).join(", ")+'</div>');
  return '<div class="view">'+out.join("")+'</div>';
}

function langChips(){
  return '<div class="chips" role="group" aria-label="'+t("language")+'"><button class="chip'+(lang()==="en"?" on":"")+'" data-act="lang" data-v="en" lang="en">English</button><button class="chip'+(lang()==="am"?" on":"")+'" data-act="lang" data-v="am" lang="am">አማርኛ</button></div>';
}

function settingsHTML(h){
  var m=h.money||{on:false,amt:0,cur:""};
  var o=[topHTML(h,''),'<h1 class="h">'+t("settings")+'</h1>'];
  o.push('<div class="sect">'+t("language")+'</div><div class="card">'+langChips()+'</div>');
  o.push('<div class="sect">'+t("thisHabit")+'</div><div class="card">'+
    '<div class="inline"><label class="fld" style="flex:0 0 74px">'+t("icon")+'<input id="sEmoji" maxlength="4" value="'+esc(h.emoji)+'"></label><label class="fld">'+t("name")+'<input id="sName" maxlength="30" value="'+esc(hname(h))+'"></label></div>'+
    '<div class="fld">'+t("mode")+'<div class="chips"><button class="chip'+(h.mode==="quit"?" on":"")+'" data-act="smode" data-v="quit">'+t("modeQuit")+'</button><button class="chip'+(h.mode==="break"?" on":"")+'" data-act="smode" data-v="break">'+t("modeBreak")+'</button></div></div>'+
    (h.mode==="break"?'<label class="fld">'+t("chLen")+'<input id="sDays" type="number" min="1" max="180" inputmode="numeric" value="'+h.days+'"></label>':'')+
    '<label class="fld">'+t("runStarted")+'<input id="sStart" type="datetime-local" value="'+toLocalInput(h.start)+'"></label><p class="note">'+t("runStartedNote")+'</p>'+
    '<button class="btn" data-act="savehabit">'+t("saveChanges")+'</button><p class="err" id="sErr" hidden></p></div>');
  o.push('<div class="sect">'+t("money")+'</div><div class="card"><label class="toggle"><span>'+t("showMoney")+'<small>'+t("showMoneyNote")+'</small></span><span class="sw"><input type="checkbox" id="mOn"'+(m.on?" checked":"")+'><span></span></span></label>'+
    '<div id="mFields"'+(m.on?'':' hidden')+'><div class="inline"><label class="fld">'+t("perDay")+'<input id="mAmt" type="number" min="0" step="0.01" inputmode="decimal" value="'+(m.amt||"")+'" placeholder="'+t("egAmt")+'"></label><label class="fld" style="flex:0 0 110px">'+t("currency")+'<input id="mCur" maxlength="5" value="'+esc(m.cur||"")+'" placeholder="ETB"></label></div></div></div>');
  o.push('<div class="sect">'+t("yourData")+'</div><div class="card"><p class="note">'+t("dataNote")+'</p>'+
    '<div class="row2"><button class="btn ghost" data-act="export">'+t("copyBackup")+'</button><button class="btn ghost" data-act="import">'+t("restoreBackup")+'</button></div>'+
    '<div id="dataBox" hidden><label class="fld"><span id="dataLab">'+t("backup")+'</span><textarea id="dataTxt" spellcheck="false"></textarea></label><button class="btn" data-act="doimport" id="doImport" hidden>'+t("restoreThis")+'</button><p class="note" id="dataMsg"></p></div></div>');
  o.push('<div class="sect">'+t("howWorks")+'</div><div class="card rulebox"><div>'+t("r1")+'</div><div>'+t("r2")+'</div><div>'+t("r3")+'</div><div>'+t("r4")+'</div></div>');
  o.push('<div class="card"><button class="btn danger" data-act="delhabit">'+t("delHabit")+'</button><div id="delConfirm" hidden><p class="note" style="margin-bottom:8px">'+t("delNote",{x:esc(hname(h))})+'</p><div class="row2"><button class="btn ghost" data-act="delno">'+t("keepIt")+'</button><button class="btn danger" data-act="delyes">'+t("del")+'</button></div></div></div>');
  o.push('<p class="note" style="text-align:center">'+t("footer")+'</p>');
  return '<div class="view">'+o.join("")+'</div>';
}

/* ---------- onboarding: three short steps ---------- */
function onboardHTML(){
  var first=!S.habits.length,o=[];
  var dots='<div class="dots" aria-label="'+ob.step+' / 3">'+[1,2,3].map(function(i){return '<i class="'+(i<=ob.step?"on":"")+'"></i>'}).join("")+'</div>';
  var lswitch='<button class="langbtn" data-act="lang" data-v="'+(lang()==="am"?"en":"am")+'" lang="'+(lang()==="am"?"en":"am")+'">'+(lang()==="am"?"English":"አማርኛ")+'</button>';
  var left=ob.step>1?'<button class="link" data-act="obback">‹ '+t("back")+'</button>':(first?'<span class="lvl">'+t("newGame")+'</span>':'<button class="link" data-act="obcancel">‹ '+t("cancel")+'</button>');
  o.push('<div class="obtop">'+left+dots+lswitch+'</div>');
  if(ob.step===1){
    o.push('<h1 class="h big">'+t("q1")+'</h1>');
    o.push('<div class="tiles">'+PRESETS.map(function(p,i){return '<button class="tile'+(ob.preset===i?" on":"")+'" data-act="obpreset" data-i="'+i+'"><i>'+p.e+'</i>'+t("h_"+p.k)+'</button>'}).join("")+
      '<button class="tile wide'+(ob.preset===-1?" on":"")+'" data-act="obpreset" data-i="-1"><i>✏️</i>'+t("other")+'</button></div>');
    if(ob.preset===-1)o.push('<div class="inline"><label class="fld" style="flex:0 0 74px">'+t("icon")+'<input id="obEmoji" maxlength="4" value="'+esc(ob.emoji)+'"></label><label class="fld">'+t("name")+'<input id="obName" maxlength="30" placeholder="'+t("otherPh")+'" value="'+esc(ob.name)+'"></label></div><p class="err" id="obErr" hidden></p><button class="btn" data-act="obnext">'+t("next")+'</button>');
    if(first)o.push('<button class="link center" data-act="demo">'+t("demo")+'</button>');
  }else if(ob.step===2){
    o.push('<h1 class="h big">'+t("q2")+'</h1>');
    o.push('<button class="mode'+(ob.mode==="quit"?" sel":"")+'" data-act="obmode" data-v="quit"><h3>'+t("modeQuit")+'</h3><p>'+t("quitShort")+'</p></button>');
    o.push('<button class="mode'+(ob.mode==="break"?" sel":"")+'" data-act="obmode" data-v="break"><h3>'+t("modeBreak")+'</h3><p>'+t("breakShort")+'</p></button>');
    if(ob.mode==="break")o.push('<div class="chips">'+[7,30,90].map(function(d){return '<button class="chip big'+(ob.days===d?" on":"")+'" data-act="obdays" data-v="'+d+'">'+(d===7?t("week1"):t("nDays",{n:d}))+'</button>'}).join("")+'</div>');
  }else{
    o.push('<h1 class="h big">'+t("q3")+'</h1>');
    o.push('<input class="when" id="obWhen" type="datetime-local" aria-label="'+t("q3")+'" value="'+toLocalInput(ob.when||now())+'">');
    o.push('<p class="err" id="obErr" hidden></p><button class="btn" data-act="obstart">'+t("startRun1")+'</button>');
  }
  return '<div class="view ob">'+o.join("")+'</div>';
}
function obRead(){var w=document.getElementById("obWhen");if(w)ob.when=fromLocalInput(w.value);var n=document.getElementById("obName");if(n)ob.name=n.value;var em=document.getElementById("obEmoji");if(em)ob.emoji=em.value}

function newHabit(o){
  return {id:uid(),name:o.name,preset:o.preset||"",emoji:o.emoji,mode:o.mode,days:o.days,start:o.start,level:1,runs:[],cravings:[],money:{on:false,amt:0,cur:""},chFrom:0,cleared:[]};
}
function demoHabit(){
  var n=now(),h=newHabit({name:"Cigarettes",preset:"cig",emoji:"🚬",mode:"quit",days:30,start:0});h.demo=true;
  var lens=[[3,0],[1,9],[2,1],[4,6]],tags=["","Stress","Coffee","Friends"],cur=3*DAY+10*HOUR+12*MIN;
  var s=n-cur-lens.reduce(function(a,l){return a+l[0]*DAY+l[1]*HOUR},0)-4*HOUR;
  h.start=s;
  lens.forEach(function(l,i){var e=s+l[0]*DAY+l[1]*HOUR;logSlip(h,e,tags[i]);s=e});
  h.start=n-cur;h.cravings=[n-5*HOUR,n-30*HOUR,n-50*HOUR];
  return h;
}

/* ---------- tabs ---------- */
var ICONS={play:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="12" rx="4"/><path d="M8 10v4M6 12h4"/><circle cx="16" cy="11" r="1" fill="currentColor"/><circle cx="18" cy="13" r="1" fill="currentColor"/></svg>',
  runs:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 20V14M10 20V9M15 20V12M20 20V5"/></svg>',
  set:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/></svg>'};
function renderTabs(show){
  var el=document.getElementById("tabs");
  if(!show){if(el)el.remove();return}
  if(!el){el=document.createElement("nav");el.id="tabs";el.className="tabs";document.body.appendChild(el)}
  el.innerHTML='<div>'+[["play","tabPlay"],["runs","tabRuns"],["set","tabSet"]].map(function(x){return '<button class="tab'+(tab===x[0]?" on":"")+'" data-act="tab" data-v="'+x[0]+'"'+(tab===x[0]?' aria-current="page"':'')+'>'+ICONS[x[0]]+t(x[1])+'</button>'}).join("")+'</div>';
}

/* ---------- sheets & overlays ---------- */
function closeLayer(){layer.innerHTML=""}
function slipSheet(h){
  var tags=TAGS.map(function(x){return '<button class="chip" data-act="tag" data-v="'+x+'">'+t("tag_"+x)+'</button>'}).join("");
  layer.innerHTML='<div class="scrim" data-act="scrim"><div class="sheet" role="dialog" aria-modal="true" aria-labelledby="slipT"><div class="grab"></div><h2 id="slipT">'+t("logSlip")+'</h2>'+
    '<p class="note">'+t("slipAt",{r:runNo(h),d:dur(elapsed(h))})+' '+(boss(h)==null?t("slipFirst"):t("slipBoss",{d:dur(boss(h))}))+'</p>'+
    '<label class="fld">'+t("whenHappen")+'<input id="slWhen" type="datetime-local" value="'+toLocalInput(now())+'"></label>'+
    '<div class="fld">'+t("whatSet")+'<div class="chips" id="slTags">'+tags+'</div></div>'+
    '<label class="fld">'+t("note")+'<input id="slNote" maxlength="80" placeholder="'+t("notePh")+'"></label>'+
    '<p class="err" id="slErr" hidden></p><div class="row2"><button class="btn ghost" data-act="close">'+t("cancel")+'</button><button class="btn" data-act="doslip">'+t("logIt")+'</button></div></div></div>';
  ui.tag="";
}
function resultOverlay(h,r){
  var head,cls,body,lvlLine,newb;
  if(r.out==="first"){head=t("firstHead");cls="first";body=t("firstBody");newb=t("firstNew",{d:dur(r.len)});lvlLine='<div class="lose"><span>'+t("levelCap")+'</span><b class="up">1</b></div>'}
  else if(r.out==="up"){head=t("upHead");cls="up";body=t("upBody");newb=t("upNew",{d:dur(r.len)});lvlLine='<div class="lose"><span>'+t("levelCap")+'</span><b class="up">'+r.prev+' → '+r.lvl+'</b></div>'}
  else{head=t("downHead");cls="";body=t("downBody");newb=t("downNew",{d:dur(r.len)});lvlLine='<div class="lose"><span>'+t("levelCap")+'</span><b>'+r.prev+' → 1</b></div>'}
  var vs=r.boss==null?'':'<div class="vs"><div class="'+(r.out==="down"?"won":"")+'">'+t("cBoss")+'<b>'+dur(r.boss)+'</b></div><span class="x">VS</span><div class="'+(r.out==="up"?"won":"")+'">'+t("cThis")+'<b>'+dur(r.len)+'</b></div></div>';
  var label=h.mode==="break"?t("startAttempt",{n:attemptNo(h)}):t("startRun",{n:runNo(h)});
  layer.innerHTML='<div class="over" role="dialog" aria-modal="true"><div class="in"><h4 class="'+cls+'">'+head+'</h4><p>'+body+'</p>'+vs+lvlLine+'<div class="newb">'+newb+'</div>'+
    '<p style="font-size:13px">'+t("pbStays",{d:'<b style="color:var(--amber)">'+dur(best(h))+'</b>'})+'</p>'+
    '<div class="gap"><button class="btn px" data-act="close">'+label+'</button><button class="btn ghost" data-act="undo">'+t("undo")+'</button></div></div></div>';
}
function habitsSheet(){
  var list=S.habits.map(function(h){return '<button class="hitem'+(h.id===S.active?" on":"")+'" data-act="pick" data-v="'+h.id+'"><i>'+esc(h.emoji)+'</i><span>'+esc(hname(h))+'<small>'+(h.mode==="break"?t("dayBreak",{n:h.days}):t("quitLvl",{n:shownLevel(h)}))+' · '+dur(elapsed(h))+'</small></span></button>'}).join("");
  layer.innerHTML='<div class="scrim" data-act="scrim"><div class="sheet" role="dialog" aria-modal="true" aria-labelledby="hT"><div class="grab"></div><h2 id="hT">'+t("yourGames")+'</h2><div class="hlist">'+list+'</div><button class="btn ghost" data-act="addhabit">'+t("addHabit")+'</button></div></div>';
}
function goalSheet(h){
  layer.innerHTML='<div class="scrim" data-act="scrim"><div class="sheet" role="dialog" aria-modal="true" aria-labelledby="gT"><div class="grab"></div><h2 id="gT">'+t("goalTitle")+'</h2><p class="note">'+t("goalNote")+'</p>'+
    '<label class="fld">'+t("totalDays")+'<input id="gDays" type="number" min="'+(h.days+1)+'" max="365" inputmode="numeric" value="'+Math.min(365,h.days*2)+'"></label><p class="err" id="gErr" hidden></p>'+
    '<div class="row2"><button class="btn ghost" data-act="close">'+t("cancel")+'</button><button class="btn" data-act="dogoal">'+t("setGoal")+'</button></div></div></div>';
}
function toast(title,msg){
  var old=document.getElementById("toast");if(old)old.remove();clearTimeout(toastTimer);
  var el=document.createElement("div");el.id="toast";el.className="toast";el.setAttribute("role","status");el.innerHTML='<b>'+title+'</b>'+msg;document.body.appendChild(el);
  toastTimer=setTimeout(function(){el.remove()},3200);
}
function showErr(id,msg){var e=document.getElementById(id);if(e){e.textContent=msg;e.hidden=false}}

/* ---------- actions ---------- */
document.addEventListener("click",function(ev){
  var el=ev.target.closest("[data-act]");if(!el)return;
  var act=el.dataset.act,h=H();
  if(act==="scrim"){if(ev.target===el)closeLayer();return}
  switch(act){
    case "tab":tab=el.dataset.v;window.scrollTo(0,0);render();break;
    case "lang":obRead();S.lang=el.dataset.v==="am"?"am":"en";save();render();break;
    case "close":closeLayer();render();break;
    case "slip":slipSheet(h);break;
    case "tag":
      var on=el.classList.contains("on");Array.prototype.forEach.call(document.querySelectorAll("#slTags .chip"),function(c){c.classList.remove("on")});
      if(!on){el.classList.add("on");ui.tag=el.dataset.v}else ui.tag="";break;
    case "doslip":
      var w=fromLocalInput(document.getElementById("slWhen").value);
      if(isNaN(w))return showErr("slErr",t("ePickDT"));
      if(w<h.start)return showErr("slErr",t("eBeforeRun",{t:dtStr(h.start)}));
      if(w>now()+MIN)return showErr("slErr",t("eFuture"));
      undoSnap=JSON.stringify(S);
      var r=logSlip(h,Math.min(w,now()),ui.tag,document.getElementById("slNote").value.trim());
      save();resultOverlay(h,r);break;
    case "undo":if(undoSnap){S=clean(JSON.parse(undoSnap))||S;undoSnap=null;save()}closeLayer();render();toast(t("tUndone"),t("tUndoneB"));break;
    case "crave":
      h.cravings.push(now());save();tick();
      var lines=t("craveLines");toast(t("tCrave"),lines[Math.floor(Math.random()*lines.length)]+" "+t("craveCount",{n:cravesThisRun(h)}));break;
    case "goodmode":
      h.cleared.push({at:now(),days:h.days});h.mode="quit";save();render();toast(t("tGood"),t("tGoodB"));break;
    case "newgoal":goalSheet(h);break;
    case "dogoal":
      var g=Math.round(+document.getElementById("gDays").value);
      if(!(g>h.days&&g<=365))return showErr("gErr",t("eGoal",{a:h.days+1}));
      h.cleared.push({at:now(),days:h.days});h.days=g;save();closeLayer();render();toast(t("tNewGoal"),t("tNewGoalB",{n:g}));break;
    case "habits":habitsSheet();break;
    case "pick":S.active=el.dataset.v;save();closeLayer();render();break;
    case "addhabit":closeLayer();ob=freshOb();ui.onboarding=true;render();break;
    case "obcancel":ui.onboarding=false;render();break;
    case "obback":obRead();ob.step=Math.max(1,ob.step-1);render();break;
    case "obpreset":obRead();ob.preset=+el.dataset.i;if(ob.preset>=0)ob.step=2;render();if(ob.preset===-1){var ni=document.getElementById("obName");if(ni)ni.focus()}break;
    case "obnext":obRead();if(!(ob.name||"").trim())return showErr("obErr",t("eName"));ob.step=2;render();break;
    case "obmode":ob.mode=el.dataset.v;if(ob.mode==="quit")ob.step=3;render();break;
    case "obdays":ob.days=+el.dataset.v;ob.step=3;render();break;
    case "obstart":
      obRead();
      var pr=ob.preset>=0?PRESETS[ob.preset]:null;
      var name=pr?pr.en:(ob.name||"").trim(),emoji=pr?pr.e:((ob.emoji||"").trim()||"⭐");
      if(!name){ob.step=1;render();return}
      var when=ob.when;if(!when||isNaN(when))return showErr("obErr",t("eWhen"));
      if(when>now()+MIN)return showErr("obErr",t("eFuture"));
      var nh=newHabit({name:name,preset:pr?pr.k:"",emoji:emoji,mode:ob.mode||"quit",days:ob.days,start:Math.min(when,now())});
      S.habits=S.habits.filter(function(x){return !x.demo});
      S.habits.push(nh);S.active=nh.id;ui.onboarding=false;tab="play";ob=freshOb();save();render();
      toast(t("tRun1"),t("tRun1B"));break;
    case "demo":var d=demoHabit();S.habits.push(d);S.active=d.id;save();tab="play";render();break;
    case "cleardemo":S.habits=S.habits.filter(function(x){return !x.demo});S.active=S.habits[0]?S.habits[0].id:null;ob=freshOb();ui.onboarding=S.habits.length>0;save();render();break;
    case "smode":
      var v=el.dataset.v;if(v!==h.mode){h.mode=v;if(v==="break")h.chFrom=h.runs.length;save();render();toast(t("tMode"),v==="break"?t("tModeBreak",{n:h.days}):t("tModeQuit"))}break;
    case "savehabit":
      var nm=document.getElementById("sName").value.trim(),em2=document.getElementById("sEmoji").value.trim(),st=fromLocalInput(document.getElementById("sStart").value),dd=document.getElementById("sDays");
      if(!nm)return showErr("sErr",t("eName"));
      if(isNaN(st))return showErr("sErr",t("eStart"));
      if(st>now())return showErr("sErr",t("eStartFuture"));
      var lastEnd=h.runs.length?h.runs[h.runs.length-1].e:-Infinity;
      if(st<lastEnd)return showErr("sErr",t("eStartSlip",{t:dtStr(lastEnd)}));
      if(dd){var dv=Math.round(+dd.value);if(!(dv>=1&&dv<=180))return showErr("sErr",t("eDays"));h.days=dv}
      if(nm!==hname(h)){h.name=nm;h.preset=""}
      h.emoji=em2||h.emoji;h.start=st;save();render();toast(t("tSaved"),t("tSavedB"));break;
    case "export":
      var box=document.getElementById("dataBox"),ta=document.getElementById("dataTxt");box.hidden=false;document.getElementById("doImport").hidden=true;
      document.getElementById("dataLab").textContent=t("yourBackup");ta.value=JSON.stringify(S);
      var msg=document.getElementById("dataMsg");
      try{navigator.clipboard.writeText(ta.value).then(function(){msg.textContent=t("copied")},function(){ta.select();msg.textContent=t("selectCopy")})}catch(e){ta.select();msg.textContent=t("selectCopy")}
      break;
    case "import":
      document.getElementById("dataBox").hidden=false;document.getElementById("doImport").hidden=false;document.getElementById("dataLab").textContent=t("pasteBackup");
      var ta2=document.getElementById("dataTxt");ta2.value="";ta2.focus();document.getElementById("dataMsg").textContent=t("restoreWarn");break;
    case "doimport":
      try{var txt=document.getElementById("dataTxt").value;if(txt.length>5e6)throw 0;var dat=clean(JSON.parse(txt));if(!dat||!dat.habits.length)throw 0;S=dat;save();render();toast(t("tRestored"),t("tRestoredB"))}
      catch(e){document.getElementById("dataMsg").textContent=t("importErr")}break;
    case "delhabit":document.getElementById("delConfirm").hidden=false;el.hidden=true;break;
    case "delno":render();break;
    case "delyes":S.habits=S.habits.filter(function(x){return x.id!==h.id});S.active=S.habits[0]?S.habits[0].id:null;save();tab="play";render();break;
  }
});
document.addEventListener("change",function(ev){
  var id=ev.target.id;
  if(id==="obWhen"||id==="obName"||id==="obEmoji"){obRead();return}
  var h=H();if(!h)return;
  if(id==="mOn"){h.money.on=ev.target.checked;document.getElementById("mFields").hidden=!h.money.on;save()}
  if(id==="mAmt"){h.money.amt=Math.max(0,+ev.target.value||0);save()}
  if(id==="mCur"){h.money.cur=ev.target.value.trim().slice(0,5);save()}
});
document.addEventListener("keydown",function(ev){if(ev.key==="Escape"&&layer.innerHTML){closeLayer();render()}});
document.addEventListener("visibilitychange",function(){if(!document.hidden&&tab==="play"&&!layer.innerHTML)tick()});

render();

/* PWA: register the service worker when hosted on its own site */
if("serviceWorker" in navigator && document.querySelector('link[rel="manifest"]')){
  window.addEventListener("load",function(){navigator.serviceWorker.register("sw.js").catch(function(){})});
}
})();
