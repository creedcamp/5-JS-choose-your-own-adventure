/*
prompt: choose your adventure
1st decision: your nose has been stuffy all day, and a friend tells you online to take
a break outside, do you: 1. take advice and go outside, if else: 2 take a nap in hopes
your nose clears up while you sleep?
if 1, lucky you, you escape a deadly carbon monoxide leak and thank your friend.
if 2 you, already being sleepy, let darkness consume your consiouse mind, only to never wake up. you died.
2nd decision: realizing your luck in being told to leave, you wonder if you should:
1. you call the proper authorities to contain the issue, and possibly look silly,
or 2. decide the matter will clear up on it's own. especially since you left the windows open earlier?
if 1, the gas company shows up, and figures out there has been a build up of volitile gas below your house,
you saved your house, and the lives and homes of your neighbors. you continue on.
if 2, while thinking on how great you were to accidently open a bottom floor window in the situation, you hear a large boom. you must go back
and face your actions. ones that cost you and your neighbors dearly.... with your home and their lives. you are sent to jail.
3rd decision: Mulling over your unprecedented day, it's time you got yourself a treat for all your great decisions.
1. do you give in to gluttonous urges, and get the biggest baconater you can?
2. do you try to continue the trend and grab some fruit on the way to the trail to make yet another healthy decision for the day?
if 1, on your way to the nearest wendy's, you find your long lost sibling, and decide to sit down for some soup before making plans for the day.
if 2, your walking feeling great, walking through beautiful open fields. as a thunderous roar pounds overhead, and you realize you never checked the weather... you are struck through by 
lightning as it courses through you, enhanced by the fruit juice covered hand you raised to defend yourself. your luck has ended, you are dead.

*/
confirm("Choose your adventure")
let death = true

var answer = prompt(
  "Your nose has been stuffy all day, your getting a headache, and a friend tells you, online, to take a break outside do you _1_ listen or _2_ sleep"
)

if (answer == 1) {
  alert(
    "Lucky you, you escape a deadly carbon monoxide leak and thank your friend."
  )
} else {
  death == true
  alert(
    "You rest, having already been sleepy, and let the darkness envelop your mind...but you do not wake up"
  )
}

var answer = prompt(
  "Realizing your luck in deciding to listen to your friend , you wonder what to do next. _1_Call the gas company or _2_ decide you have done enough, I mean, you left a window open?"
)

if (answer == 1) {
  alert(
    "The gas company shows up, and informs you that, had you not called, the entire block could have blown due to a gas bublle in the ground. GOOD JOB!"
  )
} else {
  death = true
  alert(
    "Finding a sense of accomplishment, you start to walk to a friends house...until you hear the boom. The next time you look up, you are telling the judge, 'but... I opened the window'"
  )
}

var answer = prompt(
  "Mulling over your unprecedented day, you decide it's time for a treat. _1_stick with healthy choices, grab some fruit and go on a walk or _2_go get a greasy burger, and risk a heart attack?",
  ""
)

if (answer == 2) {
  alert(
    "On your walk to the nearest Karl's jr., and you run into a long lost sibling. They have diabettes, so you decide to go to sweet tomatoes, and find out this person can lead you to your dream job. It's gonna be a good life."
  )
} else {
  death = true
  alert(
    "your walking feeling great, walking through beautiful open fields. as a thunderous roar pounds overhead, and you realize you never checked the weather... you are struck through by lightning as it courses through you, enhanced by the fruit juice covered hand you raised to defend yourself. Your luck has ended, you are dead."
  )
}
