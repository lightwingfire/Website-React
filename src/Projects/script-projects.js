const theInfo = {
    taserGuitar: {
        image: "taser-guitar.png",
        title: "Taser Guitar",
        date: "September, 2022",
        text: "To achieve this, it was necessary to detect when the player missed a note.\
        Initial attempts involved using Tensor Flow AI to detect the game state from the screen,\
        but it was unreliable. Instead, the game’s memory was read to achieve detection.\
        When the player misses a note, a certain section of memory changes,\
        and a script reads the change in game state. It then sends a signal\
        to an Arduino, which triggers the stun gun’s fire button, which shocks the player holding the guitar.",
        link: "https://youtu.be/jnBYp512dPM"
    },
    AAA: {
        image: "AAA.png",
        title: "Anti-Anime-Automata",
        date: "March, 2022",
        text: "After gathering 10,000 profile pictures and sorting them, I used Tensorflow to \
        train an AI to detect if an image contains anime. Once I generated the model, I then integrated it\
        into a discord bot. This bot acts on an aggression level set by the admins, it can quarantine, kick, and\
        ban users who do not adhere to the server's profile picture policy. ",
        link: "https://youtu.be/xs8R64AbYL0"
    },
    Duck: {
        image: "needy-duckling.png",
        title: "Needy Duckling Game",
        date: "May, 2020",
        text: "This was a final project that I completed for my Programming 201 class.\
        In this game, you need to tend to the duckling's needs or else it will die. It needs\
        to sleep regularly, be cleaned, fed, played with, and told to go 'potty'. This was a lot \
        fun because I really learned how games tick and how to make an animation manager.",
        link: "https://github.com/lightwingfire/Needy-Duck"
    },
    TikTokGen: {
        image: "reddittiktok.png",
        title: "Reddit Tik Tok Generator",
        date: "August, 2022",
        text: "Like every Gen-Zer I am cripplingly addicted to Tik-tok. One of the biggest 'genres' of videos\
        on the platform are askreddit scrubs, where they take the top comments from an askreddit thread and have \
        the tts read them. I decided to write a script that would do it all automatically. It scrapes Reddit for \
        the top Ask Reddit threads, screenshots all the top comments, and edits together a video of the Tik Tok TTS reading \
        those comments.",
        link: "https://github.com/lightwingfire/Reddit-TikTok-Video-Generator"
    },
    DiscordVizual: {
        image: "calander.png",
        title: "Discord Usage Visualization",
        date: "December, 2020",
        text: "For my data visualization class, I wanted to do something unique. Most people were visualizing the\
        COVID pandemic for an easy B+, but I thought doing my Discord usage would be a more interesting tale for my professor.\
        First I extracted all the text logs from my friend's server. Next, I wrote a script that counted the number of times\
        I sent messages each day (adjusted to the EST time zone) and recorded that in an Excel sheet. Finally, with that information\
        I put it into a custom table, which perfectly visualized my history with the application.",
        link: "https://github.com/lightwingfire/Discord-Data-Visualization"
    },
    JTicTac: {
        image: "tictactoe.png",
        title: "Java Tic Tac Toe",
        date: "July, 2017",
        text: "This was my final for my intro-to-java class. This is a two-player game of tic-tac-toe that also has the optional\
                            bot mode. The bot has three difficulties that impliments the main tic-tac-toe algorithms. I learned a lot about building an\
                            app, how Jframe works, and how to implement algorithms into a computer program. This was my first big programming project.",
        link: "https://github.com/lightwingfire/Java-Tic-Tac-Toe"
    },
    SharpenerSpeedrun: {
        image: "sharpen.png",
        title: "Pencil Sharpening Speedrun",
        date: "December, 2022",
        text: "Have you ever had something just stick to your brain? For me, that's pencils. I saw a video a few years ago about\
                            a guy trying to get the world record. I thought to myself, I can beat that! So over a week or two, I developed a pencil sharpener\
                            that followed the rules as closely as possible. I am very close to beating the world record!",
        link: "https://www.speedrun.com/pss?h=In_Real_Life-Drillless-10_Pencils&x=wk6jemod-9l77m9pl.rqvw5o51-kn0eed83.4lx54v31"
    },
    PencilHand: {
        image: "pencilhand.png",
        title: "Pencil Holder",
        date: "December, 2021",
        text: "Have you ever had something just stick to your brain? For me, that's pencils. I like to think about ways in which you can \
                            store pencils. Well, I couldn't get this idea of pencils going through my hand as a macabre pencil holder (it was also finals week \
                            so there might be a macabre connection there). I cast my hand in plaster, drilled holes through the palm, and mounted it all to \
                            a small piece of wood.",
        link: "https://www.amazon.com/Luna-Bean-KEEPSAKE-Plaster-Materials/dp/B01E4LWBLQ"
    },
    ArduinoTetris: {
        image: "tetris.png",
        title: "Arduino Tetris",
        date: "July, 2019",
        text: "This is a project that I never finished, but I still think it's a demonstration of my skill and my progress as a maker. \
                            Using an Arduino, a fight stick, a strip of LEDs, some MDF, and foamcore, I built a tetris arcade machine. I think the biggest lesson \
                            I learned from this project is to know your scope. When I started, I knew I wanted to make a tetris arcade machine, but I didn't write out \
                            exactly what it would look like. I just kept adding more features and ideas until the weight of the undertaking crushed the project. I do want \
                            to return to this project, but I will be starting over with a solid plan of what it will look like.",
        link: "https://tetris.fandom.com/wiki/Tetris_Guideline"
    },
    ICarly: {
        image: "icarly.png",
        title: "iCarly Remote",
        date: "July, 2021",
        text: "I was very excited for the iCarly reboot, and to get ready for the release of the new show, I built the remote from the original show. \
                            I studied the show to get the approximate dimensions of the remote, which I then modeled for 3D printing. I hacked a HC-05 module to have the \
                            same firmware as a RN42 so that my Arduino would appear to devices as a bluetooth keyboard (the 6 buttons on the remote spell i-c-a-r-l-y). After \
                            that I wired 6 buttons to my Arduino, and bob's your uncle, I made the remote from iCarly!",
        link: "https://icarly.fandom.com/wiki/Sam%27s_Remote"
    },
    Klangschalter: {
        image: "klangschalter.png",
        title: "DAC Audio Changer",
        date: "July, 2021",
        text: "This is a project spawned from laziness. Instead of making two mouse clicks to switch between my headphones and speakers, I wanted just one button. \
                            This was an easy project because my DAC has this funny quirk where my speaker cables in the back are always on. So I just needed to wire a switch in \
                            series. I bought a 2 pole light switch, 3D printed a box for it, and wired the output of my DAC through the switch to my speakers. This was a \
                            weekend project, but I use it nearly every day.",
        link: "https://translate.google.com/?sl=de&tl=en&text=klangschalter&op=translate"
    },
    RenFaire: {
        image: "RenFaire.png",
        title: "Ren Faire Costume",
        date: "August, 2019",
        text: "My friends and I had never been to a ren faire before, but we read online that dressing up was highly \
                            encouraged. I wanted to try my hand at sewing together a full costume. I drew up this idea of some sort of dnd \
                            adventure-sorcerer and really loved the look. I made a moc on an action figure to figure out the pattern. Once I was \
                            happy with the pattern, I went out and bought fabric for a bigger version. There was definitely room to improve, but I was able to hide all my mistakes. \
                            Overall, I was very happy with the final result.",
        link: "http://www.parenfaire.com/"
    },
    ShoeBench: {
        image: "bench.png",
        title: "Shoe Bench",
        date: "December 2018",
        text: "This was a Christmas present for my mom. We had an issue where we had all these shoes but no place to put them.\
                            Originally we *bought* a shoe rack from Amazon, but within two months, the weight of all our shoes brought it crashing down.\
                            With the help of my carpenter friend, we designed a bench, cut the wood, and built the bench. Along with the carpentry, I sewed\
                            together a pillow so that you could sit on top of it while putting on or taking off your shoes.",
        link: "https://media.tenor.com/hLQHo8YyYooAAAAC/nike-shoe.gif"
    },
    stuffedDog: {
        image: "stuffeddog.png",
        title: "Stuffed Dog",
        date: "February 2023",
        text: "This was a Valentine's Day present for my girlfriend. I have always wanted to be able to make my own plushes, so this \
                            was me dipping my toes into sewing stuffed animals. I purchased a book years ago with step-by-step instructions on how to \
                            make stuffed critters. I decided the stuffed dog would be a good jumping-off point because it was simple but looked complex.\
                            It turned out great besides accidently sewing its head sideways, but it looks cute, so that's all that matters.",
        link: "https://a.co/d/efL0Q7l"
    },
    dressPants: {
        image: "dressPants.png",
        title: "Dress Pants",
        date: "April 2023",
        text: "I needed pants for work, so why not make my own? I went out and bought a pattern for dress pants and spent the next \
                            week sewing it after work. I think my sewing abilities have improved a lot after this project, and I learned a couple of \
                            tricks for sewing future projects.",
        link: "https://simplicity.com/simplicity/s9241"
    },
    connectFourTrophy: {
        image: "connectFourTrophy.png",
        title: "Connect 4 Tournament Trophy",
        date: "September 2021",
        text: "For about a month, my friends and I became obsessed with Connect 4 because of the ease of play and the catchy song\
                            in Club House 51 on Switch. I decided I needed to hold a Connect 4 tournament, and in order for it to be a true tournament\
                            there needed to be a trophy. Thus I modeled and 3D printed this for the winner of the competition.",
        link: "https://www.printables.com/model/429243-connect-4-trophy"
    },
    doorPuller: {
        image: "doorPuller.png",
        title: "Door Handle Puller",
        date: "May 2023",
        text: "A co-worker of mine was struggling to open doors in our building because of their germaphobia. I asked them if they\
                            wanted me to 3D print them one of those door opening hooks, but they said they already had a metal one. Thus, I knew I wanted\
                            to make them something that would work just for them. I started out by making a Lego prototype to see how it would feel. After\
                            finding a shape they liked I jumped into Fusion 360 to start modeling a prototype. Once it was finished, I got some input on how\
                            it could improve, so I reprinted it and gave them the final version.",
        link: "https://www.thingiverse.com/search?q=door+opener&page=1&type=things&sort=relevant"
    },
    headPhoneHanger: {
        image: "headphonehanger.png",
        title: "Headphone Hanger",
        date: "March 2023",
        text: "I have very limited space on top of my desk. I knew I was going to need something that hung from a leg, but I couldn't\
                            find anything that suited my fancy. I needed a headphone hanger that could 1) hold my headphones 2) neatly reduce the total length of wire\
                            and 3) not damage the headphones if I tripped on them. So I made this magnetic headphone holder. You can wrap the extra wire on the inside cylinder, but if you\
                            trip over the wire, the hanger falls off the leg, harming no headphones.",
        link: "https://www.printables.com/model/494771-headphone-hanger"
    },
    breadboardClock: {
        image: "solderClock.png",
        title: "PerfBoard Clock",
        date: "May 2018",
        text: "I wanted to get into hobby electronics, and I thought making a clock would be a good jumping off point. I used a 555 timer to track\
                            the seconds and an ATmega328 to control the clock face. I learned how to pick and order electric components and how to program arduino,\
                            how to solder through-hole components and how to program a controller chip. I think that this was a great first project. If I were to\
                            do it again, I would do it without the microcontroller. That would be an interesting project.",
        link: "https://medium.com/@rxseger/notes-on-prototyping-circuit-boards-c5906e637123"
    },
    filler: {
        image: "https://pbs.twimg.com/profile_images/1285655593592791040/HtwPZgej_400x400.jpg",
        title: "This is filler",
        date: "filler, this is",
        text: "This is fillerThis is fillerThis is fillerThis is fillerThis is fillerThis is fillerThis is filler\
        This is fillerThis is fillerThis is fillerThis is fillerThis is fillerThis is fillerThis is fillerThis is filler\
        This is fillerThis is fillerThis is fillerThis is fillerThis is fillerThis is fillerThis is filler\
        This is fillerThis is fillerThis is fillerThis is fillerThis is fillerThis is fillerThis is filler\
        This is fillerThis is fillerThis is fillerThis is fillerThis is fillerThis is fillerThis is fillerThis is filler\
        This is fillerThis is filler"
    }
}

export { theInfo }