function givemecolor(thecolor,thetext)
{
    var span = document.createElement('span');
    span.style.color = thecolor;
    span.innerText = thetext;
    return span;
}
var container = document.getElementById('textholder');
container.append(givemecolor('green', "Hello I'm green"));
container.append(givemecolor('red', "Hello I'm red"));