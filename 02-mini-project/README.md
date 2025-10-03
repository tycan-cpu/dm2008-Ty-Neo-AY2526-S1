# DM2008 - Mini Project: BONG (BASTARD PONG)

## Foreword from Ty
I saw God multiple times coding this. He looked down at me and laughed. BONG is a representation of my love-hate relationship with code and this pong dupe that made me go around hysterically telling people I had pong due 2359. 

## What Ty learned
1. THE IMPORTANCE OF PSEUDOCODE
Code is overwhelming. Jumping into it made me stumble over my feet with thinking about all the features I wanted to implement and all the organisation that needed to happen. I found myself leaning on the pseudocode I wrote before I started coding. "Single player mode where the player uses mouse to control both paddles" became boolean variables that defined whether single player or multiplayer mode was activated, and what triggers made those booleans true.  "When players lose 10 times, they unlock free movement because why not!", which then translated into "I need to change the .vx". 

I found myself falling back onto my logic the most, which made coding so satisfying. Because when the code worked the way I wanted to, it felt like my brain understood the language that p5js was speaking to me. TLDR; if all else fails, dumb it down for human brain.

2. WRITING CODE IN THE RIGHT CODE BLOCKS
Order in p5js is so important...most of my debugging was me just rearranging my already correctly written code away from setup() to draw() or vice versa. I think it really highlighted the importance of understanding what each part of the code plays to create the final game; like building legos brick by brick. When I thought about code like that, it made things a lot easier.

## A win Ty wants to share
My favourite line of code I birthed was defining the variable firstClick and writing it so that the first click a user does, it only makes firstClick = true. This meant when I clicked the screen, it would load the sketch in only. So I could continue using mousePressed as a trigger for single player mode! Which is funny because that specific line of code isn't seen to players. It's only a backend thing, but it's something that I coded with understanding that p5js sketches need to be clicked in before any inputs are registered (at least, from what I know right now). I felt very smart. 

## Conclusion
I think I quite like coding. I like the oyster that is p5js and its funky syntax and how it makes me hate and love myself. Coding is fun.