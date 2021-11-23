const tacj = {
    splitText: (who, cb) => {
        splitText(who, cb)
    },
    animate: (who, settings, cb) => {
        switch(settings.type) {
            case 'typing':
                return typing(who, settings, cb);
            case 'sendColors':
                return sendColors(who, settings, cb);
        }
    }
}

function splitText(who, cb='undefined') {
    var obj = document.querySelector(who);
    obj.classList.add('splitted_text');
    txt = obj.innerHTML.trim();

    var underline = false;
    var skip = false;
    var newHTML = "<section class='line'><div class='word'>";
    
    newHTML += txt.split('').map(l => {
        if(!skip){
            switch(l) {
                case '~':
                    skip = true;
                    break;
                case ' ':
                    return '</div> <div class="word">'
                case '|':
                    return '<br/>';
                case '[':
                    return '<b>';
                case ']':
                    return '</b>';
                case '{':
                    return '<i>';
                case '}':
                    return '</i>';
                case '_':
                    underline = !underline;
                    return;
                case '^':
                    return '</div></section><section class="line"><div class="word">';
                default:
                    return underline ? "<span class='letter'><u>"+l+"</u></span>" : "<span class='letter'>"+l+"</span>";
            }
        } else { 
            skip = false;
            if(underline) {
                return "<span class='letter'><u>"+l+"</u></span>"
            } else {
                return "<span class='letter'>"+l+"</span>"
            }
        }
        
    }).join('');
    newHTML += '</div></section>'
    obj.innerHTML = newHTML;
    if(typeof cb === 'function') cb();
}

let root = document.documentElement.style;

function typing(who, settings, cb='undefined') {
    let data = {}
    // function variables
    var spans = document.querySelectorAll(`${who} .letter`);
    time = settings.time || 5;

    // set up data
    data.i = 0;
    data.spans = spans;
    data.speed = (time * 1000) / spans.length;
    data.className = 'y2_type',
    data.before_className = 'y2_before_type',

    // set up data in root css
    settings.duration = settings.duration || 0.5
    root.setProperty('--duration', `${settings.duration}s`);
    root.setProperty('--transform', settings.transform || '');
    root.setProperty('--opacity', settings.opacity || '1');
    root.setProperty('--color', settings.color || 'inherit');
    root.setProperty('--textShadow', settings.textShadow || 'inherit');

    // add before_tag & remove all the tags in case of re-animate
    spans.forEach(span => {
        span.classList.add(data.before_className);
        span.classList.remove(data.className);
    });

    spans[spans.length-1].addEventListener('animationend', () => {
        spans.forEach(span => span.classList.remove(data.className));
        if(cb != 'undefined') cb();
    })
    // animate them inside
    sendAnimation(data);
}

function sendColors(who, settings, cb='undefined') {
    let data = {}
    // function variables
    var spans = document.querySelectorAll(`${who} .letter`);
    time = settings.time || 5;

    // set up data
    data.i = 0;
    data.spans = spans;
    data.speed = (time * 1000) / spans.length;
    data.className = 'y2_sendColors',
    data.before_className = null,

    // set up data in root css
    settings.duration = settings.duration || 0.5;
    settings.jump = settings.jump || 0;
    settings.textShadow = settings.textShadow || 'inherit';

    root.setProperty('--duration', `${settings.duration}s`);
    root.setProperty('--color_1', settings.color_1 || settings.color || 'green');
    root.setProperty('--color_2', settings.color_2 || settings.color || 'green');
    root.setProperty('--color_3', settings.color_3 || settings.color || 'green');
    root.setProperty('--transform', `translateY(${settings.jump}px)`);
    root.setProperty('--textShadow', settings.textShadow);

    // add before_tag & remove all the tags in case of re-animate
    spans.forEach(span => {
        span.classList.add(data.before_className);
        span.classList.remove(data.className);
    });

    spans[spans.length-1].addEventListener('animationend', () => {
        spans.forEach(span => span.classList.remove(data.className));
        if(cb != 'undefined') cb();
    })
    // animate them inside
    sendAnimation(data);
}
// THE function
function sendAnimation(data){
    if (data.i < data.spans.length) {
        data.spans[data.i].classList.add(data.className);
        data.spans[data.i].classList.remove(data.before_className);
        data.i++;
        setTimeout(() => {
            sendAnimation(data);
        }, data.speed);
    }
}

try{
    module.exports = tacj;
} catch {}