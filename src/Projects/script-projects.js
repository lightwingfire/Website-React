const theInfo = {
    taserGuitar: {
        image: "taser-guitar.png",
        title:"Taser Guitar",
        date:"September, 2022",
        text: "To achieve this, it was necessary to detect when the player missed a note.\
        Initial attempts involved using Tensor Flow AI to detect the game state from the screen,\
        but it was unreliable. Instead, the game’s memory was read to achieve detection.\
        When the player misses a note, a certain section of memory changes,\
        and a script reads the change in game state. It then sends a signal\
        to an Arduino which triggers the stun gun’s fire button, which shocks the player holding the guitar.",
        link:"https://youtu.be/jnBYp512dPM"
    },
    AAA: {
        image: "AAA.png",
        title:"Anti-Anime-Automata",
        date:"March, 2022",
        text: "After Gathering 10,000 profile pictures and sorting them, I used Tensorflow to \
        train an AI to detect if an image contained anime. Once I generated the model, I then integrated it\
        into a discord bot. This Bot acts on an aggression level set by the admins, it can quarantine, kick, and\
        ban users who do not adhere to the servers profile picture policy. ",
        link:"https://youtu.be/xs8R64AbYL0"
    },
    Duck:{
        image:"needy-duckling.png",
        title:"Needy Duckling Game",
        date:"May, 2020",
        text:"This was a final project that I completed for my Programming 201 class.\
        In this game you need to tend to the ducklings needs or else it will die. It needs\
        to sleep regularly, be cleaned, feed, played with, and told to go 'potty'. This was a lot \
        fun because I really learnt how games tick and how to make an animation manager.",
        link:"https://github.com/lightwingfire/Needy-Duck"
    },
    TikTokGen:{
        image:"reddittiktok.png",
        title:"Reddit Tik Tok Generator",
        date:"August, 2022",
        text:"Like every gen-zer I am cripplingly addicted to Tik-tok. One of the biggest 'genres' of videos\
        on the platform are askreddit scrubs where they take the top comments from an askreddit thread and have \
        the tts read them. I decided to write a script that would do it all automatically. It scrape reddit for \
        the top askreddit thread, screenshots all the top comments and edits together a video of the tik tok tts reading \
        those comments.",
        link:"https://github.com/lightwingfire/Reddit-TikTok-Video-Generator"
    },
    DiscordVizual:{
        image:"calander.png",
        title:"Discord Usage Visualization",
        date:"December, 2020",
        text:"For my Data-Visualization class I wanted to do something unique. Most people where visualizing the\
        covid pandemic for an easy B+ but I thought doing my discord usage would be a more interesting tale for my professor.\
        First I extracted all the text logs from my friend server. Next I wrote a script which counted the number of times\
        I sent messages each day (adjusted to est timezone) and recorded that to an excel sheet. Finally with that information\
        I put it into a custom table which perfectly visualed my history with the application.",
        link:"https://github.com/lightwingfire/Discord-Data-Visualization"
    },
    JTicTac:{
        image:"tictactoe.png",
        title:"Java Tic Tac Toe",
        date:"July, 2017",
        text:"This was my final for my intro-to-java class. This is a 2 player game of tic tac toe that also has the optional\
        bot mode. The bot has 3 difficulties which impliments the main tic tac toe algorithms. I learnt alot about building an\
        app, how Jframe works, and how to impliment algorithms into a computer program. This was my first BIG programming project.",
        link:"https://github.com/lightwingfire/Java-Tic-Tac-Toe"
    },
    SharpenerSpeedrun:{
        image:"sharpen.png",
        title:"Pencil Sharpening Speedrun",
        date:"December, 2022",
        text:"Have you ever have something just stick to your brain? For me that's pencils. I saw a video a few years ago about\
        a guy trying to get the world record. I thought to myself, I can beat that! So over a week or 2 I developed a pencil sharpener\
        that followed the rules as closely as possible. I am very close to beating the world record!",
        link:"https://www.speedrun.com/pss?h=In_Real_Life-Drillless-10_Pencils&x=wk6jemod-9l77m9pl.rqvw5o51-kn0eed83.4lx54v31"
    },
    PencilHand:{
        image:"pencilhand.png",
        title:"Pencil Holder",
        date:"December, 2021",
        text:"Have you ever have something just stick to your brain? For me that's pencils. I like to think about ways which you can \
        store pencils. Well I couldn't get this idea of pencils going through my hand as a macabre pencil holder (it was also finals week \
        so there might be a macabre connection there). I casted my hand in plaster, drilled holes through the palm and mounted it all to \
        a small peice of wood.",
        link:"https://www.amazon.com/Luna-Bean-KEEPSAKE-Plaster-Materials/dp/B01E4LWBLQ"
    },
    ArduinoTetris:{
        image:"tetris.png",
        title:"Arduino Tetris",
        date:"July, 2019",
        text:"This is a project that I never finish-finished but I still think it's a demostration of my skill and my progress as a maker. \
        Using an arduino, a fight stick, a strip of leds, some mdf, and foamcore I built a tetris arcade machine. I think the biggest lesson \
        I learnt from this project is knowing your scope. When I started I knew I wanted to make a tetris arcade machine, but I didn't write out \
        exactly what it would look like. I just kept adding more features and ideas until the weight of the undertaking crushed the project. I do want \
        to return to this project, but I will be starting over and with a solid plan of what it will look like.",
        link:"https://tetris.fandom.com/wiki/Tetris_Guideline"
    },
    ICarly:{
        image:"icarly.png",
        title:"iCarly Remote",
        date:"July, 2021",
        text:"I was very excited for the iCarly reboot and to get ready for the release of the new show I built the remote from the original show. \
        I studied the show to get the appoximate dimensions of the remote which I then modeled for 3d printing. I hacked a HC-05 module to have the \
        same firmware as a RN42 so that my arduino would appear to devices as a bluetooth keyboard (the 6 buttons on the remote spell i-c-a-r-l-y). After \
        that I wired 6 buttons to my arduino and bob's your uncle I made the remote from iCarly!",
        link:"https://icarly.fandom.com/wiki/Sam%27s_Remote"
    },
    Klangschalter:{
        image:"klangschalter.png",
        title:"DAC Audio Changer",
        date:"July, 2021",
        text:"This is a project spawned from laziness. Instead of doing 2 mouse clicks to switch between my headphones and speakers, I wanted just one button. \
        This was an easy project because my DAC has this funny quirk where my speaker cables in the back are always on. So I just needed to wire a switch in \
        series. I bought a 2 pole light switch, 3d printed a box for it, and wired my output of my dac through the switch to my speakers. This was a \
        weekend project but I use it nearly everyday. ",
        link:"https://translate.google.com/?sl=de&tl=en&text=klangschalter&op=translate"
    },
    RenFaire:{
        image:"RenFaire.png",
        title:"Ren Faire Costume",
        date:"August, 2019",
        text:"My friends and I had never been to a ren faire before but we read online that dressing up was highly \
        encouraged. I designed to try my hand at sewing together a full costume. I drew up this idea of some sort of dnd \
        adventure-sorcerer and really loved the look. I made a moc on an action figure to figure out the pattern. Once I was \
        happy with the pattern, I went out and bought fabric for a bigger version. There was definately room to improve but I was able to hide all my mistakes. \
        Overall I was very happy with the final result.",
        link:"http://www.parenfaire.com/"
    },
    filler:{
        image:"https://pbs.twimg.com/profile_images/1285655593592791040/HtwPZgej_400x400.jpg",
        title:"This is filler",
        date:"filler, this is",
        text:"This is fillerThis is fillerThis is fillerThis is fillerThis is fillerThis is fillerThis is filler\
            This is fillerThis is fillerThis is fillerThis is fillerThis is fillerThis is fillerThis is fillerThis is filler\
            This is fillerThis is fillerThis is fillerThis is fillerThis is fillerThis is fillerThis is filler\
            This is fillerThis is fillerThis is fillerThis is fillerThis is fillerThis is fillerThis is filler\
            This is fillerThis is fillerThis is fillerThis is fillerThis is fillerThis is fillerThis is fillerThis is filler\
            This is fillerThis is filler"
    }
}







export {theInfo }