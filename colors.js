var Links = {
    setColor:function(color){
        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
            alist[i].style.color = color;
            i++;
        }
    }
}
var Body = {
    setColor: function(color){
        document.querySelector('body').style.color = color;
    },
    BodySetBackgroundColor: function(color){
        document.querySelector('body').style.backgroundColor= color;
    }
}

function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'Night'){
    BodySetBackgroundColor('black');
    BodySetColor('white');
    self.value = 'Day'

    LinksSetColor('powderblue');

} else {
    BodySetBackgroundColor('white');
    BodySetColor('black');
    self.value = 'Night'

    LinksSetColor('blue');
}
}