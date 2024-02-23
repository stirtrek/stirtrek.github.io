---
title: Workshops
year: 2024
alias:
- workshops/index.html
- Workshops/
---

# Workshops Are New In 2024

<div class="icon-hr"></div>

We're bringing ~~StirShops WorkTreks~~ Workshops to Stir Trek for the first time this year and we hope you are as excited as we are!

Workshops will be held on Saturday, May 4th and will be available for purchase along with your main conference registration. 

More details coming soon!

<br>

{% raw %}
<div class="speakerAvatarBioStrip">
    <div class="avatarPanel comic-panel-body">
        <div class="comic-panel-header comic-panel-highlighted">
            Carey Payette!
        </div>
        <div>
            <img src="/images/speakers/2022/Carey-Payette.jpg" class="img-responsive speakerImage">
        </div>
        <div class="speakerTagline">
            <h3>Trillium Innovations</h3>
        </div>
    </div>
    <div class="bioPanel comic-panel-body">
        <div class="comic-panel-header comic-panel-highlighted">
            Workshop!
        </div>
        <h2>TBD</h2>
        TBD
    </div>
</div>
<div class="speakerAvatarBioStrip">
    <div class="avatarPanel comic-panel-body">
        <div class="comic-panel-header comic-panel-highlighted">
            Steve Smith!
        </div>
        <div>
            <img src="/images/speakers/2023/Steve-Smith.jpg" class="img-responsive speakerImage">
        </div>
        <div class="speakerTagline">
            <h3>I Help Teams Deliver Better Software</h3>
        </div>
    </div>
    <div class="bioPanel comic-panel-body">
        <div class="comic-panel-header comic-panel-highlighted">
            Workshop!
        </div>
        <h2>Building a Modular Monolith in .NET</h2>
        A monolith refers to a software application that is deployed as a single physical deployment. Many monolithic applications lack sufficient structure and end up becoming Big Balls of Mud. By contrast, a modular monolith breaks up the application into logical modules which are largely independent from one another. This provides many of the benefits of more distributed approaches like microservices without the overhead of deploying and managing a distributed application. In this hands-on workshop, you’ll learn how to get started building a modular monolith application in .NET 8
    </div>
</div>
<div class="speakerAvatarBioStrip">
    <div class="avatarPanel comic-panel-body">
        <div class="comic-panel-header comic-panel-highlighted">
            TBD!
        </div>
        <div>
            <img src="/images/StirTrek-Emblem-Gold.png" class="img-responsive speakerImage">
        </div>
        <div class="speakerTagline">
            <h3>TBD</h3>
        </div>
    </div>
    <div class="bioPanel comic-panel-body">
        <div class="comic-panel-header comic-panel-highlighted">
            Workshop!
        </div>
        <h2>TBD</h2>
        TBD
    </div>
</div>
<style>
        .speakerAvatarBioStrip {
            display: grid;
            width: 100%;
            grid-template-areas:
                "avatar     bio         bio";
            grid-template-columns: 1fr 1fr 1fr;
            column-gap: 40px;
            margin-bottom: 40px;            
        }
        .speakerSessionStrip {
            display: grid;
            width: 100%;
            grid-template-areas:
                "abstract   abstract    time"
                "abstract   abstract    stirTrek";
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            column-gap: 40px;
            grid-row-gap: 40px;
        }
        @media only screen and (max-width:990px) {
            .speakerAvatarBioStrip, .speakerSessionStrip {
                display: block;
            }
        }
        .speakerAvatarBioStrip .comic-panel-body.avatarPanel {
            grid-area: avatar;
            background-size: 8px 8px, 8px 8px, 8px 8px, 8px 8px, 8px 8px, 100% 100%;
            color: black;
            text-align: center;
        }
        .speakerSessionStrip .abstractPanel {
            grid-area: abstract;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .speakerAvatarBioStrip .bioPanel {
            grid-area: bio;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .speakerSessionStrip .comic-panel-body.stirTrekPanel {
            grid-area: stirTrek;
            background-size: 8px 8px, 8px 8px, 8px 8px, 8px 8px, 8px 8px, 100% 100%;
        }
        .speakerSessionStrip .timeAndRoomPanel {
            grid-area: time;
            display: flex;
            flex-direction: column;
            justify-content: center;    
        }
        .speakerAvatarBioStrip .comic-panel-body.avatarPanel,
        .speakerSessionStrip .comic-panel-body.stirTrekPanel {
            background-image: radial-gradient(ellipse farthest-corner, transparent 0%, transparent 35%, #fff 30%, #fff 40%, transparent 90%), 
                radial-gradient(ellipse farthest-corner at 0px 0px, transparent 0%, transparent 20%, #fff 15%, #fff 20%, transparent 50%), 
                radial-gradient(ellipse farthest-corner at 8px 8px, transparent 0%, transparent 20%, #fff 15%, #fff 20%, transparent 50%), 
                radial-gradient(ellipse farthest-corner at 0px 8px, transparent 0%, transparent 20%, #fff 15%, #fff 20%, transparent 40%), 
                radial-gradient(ellipse farthest-corner at 8px 0px, transparent 0%, transparent 20%, #fff 15%, #fff 20%, transparent 50%), 
                linear-gradient(40deg, #c48b2fb3 0, #f7c16ab3 30%, #dbab5bb3 50%, #dbab5bb3 70%, #c48b2fb3 100%);
        }
        .stirTrekPanelImage {
            background-image: url('/images/StirTrek-Emblem-Gold-400x588.png');
            width: 100%;
            height: 100%;
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
        }
        .speakerAvatarBioStrip .comic-panel-body, .speakerSessionStrip .comic-panel-body {
            position: relative;
        }
        .speakerAvatarBioStrip .comic-panel-header, .speakerSessionStrip .comic-panel-header {
            position: absolute;
            top: -35px;
            left: -25px;
        }
        .speakerAvatarBioStrip .speakerImage {
            width: 80%;
            border-radius: 50%;
            border: 6px solid #111c2e;
            margin: 2em auto 0;
        }
        .speakerAvatarBioStrip .speakerTagline {
            vertical-align: middle;
        }
        .speakerAvatarBioStrip .speakerBio {
            margin-top: 5%;
        }
        @media only screen and (max-width:990px) {
            .speakerAvatarBioStrip .comic-panel-body, .speakerSessionStrip .comic-panel-body {
                border: 20px solid white;
                padding: 30px 20px;
                margin-bottom: 40px;
            }
            .speakerAvatarBioStrip .comic-panel-header, .speakerSessionStrip .comic-panel-header {
                top: -35px;
                left: -45px;
            }
            .speakerAvatarBioStrip .speakerImage {
                display: block;
                margin: 0px auto;
                margin-top: 2em;
            }
            .speakerAvatarBioStrip .speakerTagline {
                width: 100%;
                display: block;
                text-align: center;
            }
            .speakerSessionStrip .stirTrekPanel {
                display: none;
            }
        }        
    </style>
{% endraw %}