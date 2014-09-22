var rolesCanvas = document.getElementById('languages'),
    skillsCanvas = document.getElementById('language'),
    rolesChart = new Chart(rolesCanvas.getContext('2d')),
    skillsChart = new Chart(skillsCanvas.getContext('2d')),
    skills = {
        "Data Modeling": {
            "Total": 4,
            "MySQL": 4,
            "PostgreSQL": 1,
            "MS Access": 2
        },
        "Backend Development": {
            "Total": 5,
            "PHP": 4,
            "Java Servlets (Tomcat)": 3,
            "Java Jersey": 2,
            "Python Django": 2.5,
            "Python webapp2": 2,
            "Python TrytonERP": 2
        },
        "Frontend Development": {
            "Total": 5,
            "Javascript": 5,
            "CSS": 5,
            "HTML5": 5,
            "Backbone.js": 1.2,
            "Underscore.js":1.2,
            "jQuery": 5,
            "Angular.js": 1.5,
            "Twitter Bootstrap 3.0": 2,
            "Zurb Foundation":  2.5
        }, 
        'Mobile Development': {
            "Total": 2,
            "Android": 3,
            "iOS": 1,
            "BlackBerry": 0.5,
            "Hybrid Apps (Apache Cordova)": 2
        },
        "UX/UI Design": {
            "Total": 4,
            "Web UI": 4,
            "Mobile/Responsive": 2,
            "UX Streamlining": 3
        },
        "Graphic Design": {
            "Total": 2,
            "Gimp": 0.8,
            "Inkscape": 0.5,
            "Photoshop": 0.1
        }, 
        "Sys Admin": {
            "Total": 4,
            "Ubuntu Server": 4,
            "Windows Server R2": 2,
            "Nginx": 3,
            "Apache": 1,
            "Bind9": 2,
        }
    }, 
    labels = [], 
    values = [],
    rolesRadar,
    skillRadar;


function getDataForSkill(skill) {
    var k, 
        labels = [], 
        values = [];

    for ( k in skill ) {
        var exp = skill[k];
        if ( k !== 'Total' && skill.hasOwnProperty(k) ) {
            labels.push(k);
            values.push(exp);
        }
    }

    return {
        labels: labels,
        datasets:[
            {
                fillColor: "rgba(150,145,135, 0.2)",
                strokeColor: "rgba(216, 212, 210, 1)",
                pointColor: "rgba(216, 212, 210, 1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: values
            }
        ]
    };
}

for(var k in skills) {
    if ( skills.hasOwnProperty(k) ) {
        labels.push(k);
        values.push(skills[k].Total);
    }
}

var data = {
    labels: labels,
    datasets: [
        {
            label: "Months of Experience",
            fillColor: "rgba(68,153,142,0.2)",
            strokeColor: "rgba(143,199,152,1)",
            pointColor: "rgba(143,199,152,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: values
        }
    ]
};

rolesRadar = rolesChart.Radar(data);

rolesCanvas.onclick = function(e) {
    var activePoints = rolesRadar.getPointsAtEvent(e),
        skill = activePoints[0].label;

    data = getDataForSkill(skills[skill]);
    if ( skillRadar ) 
        skillRadar.destroy();

    skillRadar = skillsChart.Radar(data);
    document.getElementsByClassName('skill-name')[0].innerHTML = skill;
};
