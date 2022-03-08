var turn = "player";
var check = false;
var num;
var a = "set";
var b = "";

function tic(click)
{
    if(turn == "player")
    {
    if(document.getElementById("spot1").innerHTML == "_")
    {
    if(click == 1)
    {
        document.getElementById("spot1").innerHTML = "X";
    }
    }
    if(document.getElementById("spot2").innerHTML == "_")
    {
    if(click == 2)
    {
        document.getElementById("spot2").innerHTML = "X";
    }
    } 
    if(document.getElementById("spot3").innerHTML == "_")
    {
    if(click == 3)
    {
        document.getElementById("spot3").innerHTML = "X";
    } 
    }
    if(document.getElementById("spot4").innerHTML == "_")
    {  
    if(click == 4)
    {
        document.getElementById("spot4").innerHTML = "X";
    } 
    } 
    if(document.getElementById("spot5").innerHTML == "_")
    {
    if(click == 5)
    {
        document.getElementById("spot5").innerHTML = "X";
    } 
    } 
    if(document.getElementById("spot6").innerHTML == "_")
    {
    if(click == 6)
    {
        document.getElementById("spot6").innerHTML = "X";
    } 
    } 
    if(document.getElementById("spot7").innerHTML == "_")
    {
    if(click == 7)
    {
        document.getElementById("spot7").innerHTML = "X";
    } 
    } 
    if(document.getElementById("spot8").innerHTML == "_")
    {
    if(click == 8)
    {
        document.getElementById("spot8").innerHTML = "X";
    } 
    }
    if(document.getElementById("spot9").innerHTML == "_")
    {
     if(click == 9)
    {
        document.getElementById("spot9").innerHTML = "X";
    }
    }
    turn = "bot";
}
if(turn == "bot")
{
    botplays()
    console.log(num);
    turn = "player";                         
}



if(document.getElementById("spot1").innerHTML == "X" && document.getElementById("spot2").innerHTML == "X" && document.getElementById("spot3").innerHTML == "X")
{
    document.getElementById("winorloose").innerHTML = "You_win";
}
if(document.getElementById("spot4").innerHTML == "X" && document.getElementById("spot5").innerHTML == "X" && document.getElementById("spot6").innerHTML == "X")
{
    document.getElementById("winorloose").innerHTML = "You_win";
}
if(document.getElementById("spot7").innerHTML == "X" && document.getElementById("spot8").innerHTML == "X" && document.getElementById("spot9").innerHTML == "X")
{
    document.getElementById("winorloose").innerHTML = "You_win";
}
if(document.getElementById("spot1").innerHTML == "X" && document.getElementById("spot4").innerHTML == "X" && document.getElementById("spot7").innerHTML == "X")
{
    document.getElementById("winorloose").innerHTML = "You_win";
}
if(document.getElementById("spot2").innerHTML == "X" && document.getElementById("spot5").innerHTML == "X" && document.getElementById("spot8").innerHTML == "X")
{
    document.getElementById("winorloose").innerHTML = "You_win";
}
if(document.getElementById("spot3").innerHTML == "X" && document.getElementById("spot6").innerHTML == "X" && document.getElementById("spot9").innerHTML == "X")
{
    document.getElementById("winorloose").innerHTML = "You_win";
}
if(document.getElementById("spot1").innerHTML == "X" && document.getElementById("spot5").innerHTML == "X" && document.getElementById("spot9").innerHTML == "X")
{
    document.getElementById("winorloose").innerHTML = "You_win";
}
if(document.getElementById("spot3").innerHTML == "X" && document.getElementById("spot5").innerHTML == "X" && document.getElementById("spot7").innerHTML == "X")
{
    document.getElementById("winorloose").innerHTML = "You_win";
}

if(document.getElementById("spot1").innerHTML == "O" && document.getElementById("spot2").innerHTML == "O" && document.getElementById("spot3").innerHTML == "O")
{
    document.getElementById("winorloose").innerHTML = "Bot_win";
}
if(document.getElementById("spot4").innerHTML == "O" && document.getElementById("spot5").innerHTML == "O" && document.getElementById("spot6").innerHTML == "O")
{
    document.getElementById("winorloose").innerHTML = "Bot_win";
}
if(document.getElementById("spot7").innerHTML == "O" && document.getElementById("spot8").innerHTML == "O" && document.getElementById("spot9").innerHTML == "O")
{
    document.getElementById("winorloose").innerHTML = "Bot_win";
}
if(document.getElementById("spot1").innerHTML == "O" && document.getElementById("spot4").innerHTML == "O" && document.getElementById("spot7").innerHTML == "O")
{
    document.getElementById("winorloose").innerHTML = "Bot_win";
}
if(document.getElementById("spot2").innerHTML == "O" && document.getElementById("spot5").innerHTML == "O" && document.getElementById("spot8").innerHTML == "O")
{
    document.getElementById("winorloose").innerHTML = "Bot_win";
}
if(document.getElementById("spot3").innerHTML == "O" && document.getElementById("spot6").innerHTML == "O" && document.getElementById("spot9").innerHTML == "O")
{
    document.getElementById("winorloose").innerHTML = "Bot_win";
}
if(document.getElementById("spot1").innerHTML == "O" && document.getElementById("spot5").innerHTML == "O" && document.getElementById("spot9").innerHTML == "O")
{
    document.getElementById("winorloose").innerHTML = "Bot_win";
}
if(document.getElementById("spot3").innerHTML == "O" && document.getElementById("spot5").innerHTML == "O" && document.getElementById("spot7").innerHTML == "O")
{
    document.getElementById("winorloose").innerHTML = "Bot_win";
}




}
function botplays()
{
    if(document.getElementById("spot3").innerHTML == "_")
    {
    if(b == "")
    {
    if(document.getElementById("spot1").innerHTML == "X" && document.getElementById("spot2").innerHTML == "X")
    {
        document.getElementById("spot3").innerHTML = "O";
        a = "";
        b = "set"
    }
    }
    }
    if(document.getElementById("spot9").innerHTML == "_")
    {
    if(b == "")
    {
    if(document.getElementById("spot1").innerHTML == "X" && document.getElementById("spot5").innerHTML == "X")
    {
        document.getElementById("spot9").innerHTML = "O";
        a = "";
        b = "set";
    }
    }
    if(b == "")
    {   
    if(document.getElementById("spot1").innerHTML == "X" && document.getElementById("spot5").innerHTML == "X")
    {
        document.getElementById("spot9").innerHTML = "O";
        a = "";
        b = "set"
    }
}
if(b == "")
{
    if(document.getElementById("spot3").innerHTML == "X" && document.getElementById("spot6").innerHTML == "X")
    {
        document.getElementById("spot9").innerHTML = "O";
        a = "";
        b = "set"
    }
}
if(b == "")
{
    if(document.getElementById("spot7").innerHTML == "X" && document.getElementById("spot8").innerHTML == "X")
    {
        document.getElementById("spot9").innerHTML = "O";
        a = "";
        b = "set"
    }
}

    }
    if(document.getElementById("spot1").innerHTML == "_")
    {
        if(b == "")
        {
    if(document.getElementById("spot2").innerHTML == "X" && document.getElementById("spot3").innerHTML == "X")
    {
        document.getElementById("spot1").innerHTML = "O";
        a = "";
        b = "set"
    }
}

}
if(document.getElementById("spot7").innerHTML == "_")
    {
        if(b == "")
        {
    if(document.getElementById("spot8").innerHTML == "X" && document.getElementById("spot9").innerHTML == "X")
    {
        document.getElementById("spot7").innerHTML = "O";
        a = "";
        b = "set"
    }
        }
        if(b == "")
        {
    if(document.getElementById("spot3").innerHTML == "X" && document.getElementById("spot5").innerHTML == "X")
    {
        document.getElementById("spot7").innerHTML = "O";
        a = "";
        b = "set"
    }
}
if(b == "")
        {
    if(document.getElementById("spot1").innerHTML == "X" && document.getElementById("spot4").innerHTML == "X")
    {
        document.getElementById("spot7").innerHTML = "O";
        a = "";
        b = "set"
    }
}

}
if(document.getElementById("spot2").innerHTML == "_")
    {
        if(b == "")
        {
    if(document.getElementById("spot1").innerHTML == "X" && document.getElementById("spot3").innerHTML == "X")
    {
        document.getElementById("spot2").innerHTML = "O";
        a = "";
        b = "set"
    }
}
if(b == "")
        {
    if(document.getElementById("spot5").innerHTML == "X" && document.getElementById("spot8").innerHTML == "X")
    {
        document.getElementById("spot2").innerHTML = "O";
        a = "";
        b = "set"
    }
}

}
if(document.getElementById("spot8").innerHTML == "_")
    {
        if(b == "")
        {
    if(document.getElementById("spot7").innerHTML == "X" && document.getElementById("spot9").innerHTML == "X")
    {
        document.getElementById("spot8").innerHTML = "O";
        a = "";
        b = "set"
    }
}
if(b == "")
        {
    if(document.getElementById("spot2").innerHTML == "X" && document.getElementById("spot5").innerHTML == "X")
    {
        document.getElementById("spot8").innerHTML = "O";
        a = "";
        b = "set"
    }
}

}
if(document.getElementById("spot6").innerHTML == "_")
    {
        if(b == "")
        {
    if(document.getElementById("spot3").innerHTML == "X" && document.getElementById("spot9").innerHTML == "X")
    {
        document.getElementById("spot6").innerHTML = "O";
        a = "";
        b = "set";
    }
}
if(b == "")
{
    if(document.getElementById("spot4").innerHTML == "X" && document.getElementById("spot5").innerHTML == "X")
    {
        document.getElementById("spot6").innerHTML = "O";
        a = "";
        b = "set"
    }
}
    
} 
if(document.getElementById("spot4").innerHTML == "_")
    {
        if(b == "")
        {
    if(document.getElementById("spot1").innerHTML == "X" && document.getElementById("spot7").innerHTML == "X")
    {
        document.getElementById("spot4").innerHTML = "O";
        a = "";
        b = "set"
    }
}
if(b == "")
{
    if(document.getElementById("spot5").innerHTML == "X" && document.getElementById("spot6").innerHTML == "X")
    {
        document.getElementById("spot4").innerHTML = "O";
        a = "";
        b = "set"
    }
}
} 
if(document.getElementById("spot5").innerHTML == "_")
    {
        if(b == "")
        {
    if(document.getElementById("spot2").innerHTML == "X" && document.getElementById("spot8").innerHTML == "X")
    {
        document.getElementById("spot5").innerHTML = "O";
        a = "";
        b = "set"
    }
}
if(b == "")
        {
    if(document.getElementById("spot1").innerHTML == "X" && document.getElementById("spot9").innerHTML == "X")
    {
        document.getElementById("spot5").innerHTML = "O";
        a = "";
        b = "set"
    }
}
if(b == "")
        {
    if(document.getElementById("spot3").innerHTML == "X" && document.getElementById("spot7").innerHTML == "X")
    {
        document.getElementById("spot5").innerHTML = "O";
        a = "";
        b = "set"
    }
}
if(b == "")
        {
    if(document.getElementById("spot3").innerHTML == "X" && document.getElementById("spot7").innerHTML == "X")
    {
        document.getElementById("spot5").innerHTML = "O";
        a = "";
        b = "set"
    }
}
if(b == "")
        {
    if(document.getElementById("spot4").innerHTML == "X" && document.getElementById("spot6").innerHTML == "X")
    {
        document.getElementById("spot5").innerHTML = "O";
        a = "";
        b = "set"
    }
}
} 

b = "";

    if(a == "set")
    {
        if(document.getElementById("spot5").innerHTML == "_")
        {
            document.getElementById("spot5").innerHTML = "O";
        }else if(document.getElementById("spot1").innerHTML == "_")
        {
            document.getElementById("spot1").innerHTML = "O";
        }else if(document.getElementById("spot3").innerHTML == "_")
        {
            document.getElementById("spot3").innerHTML = "O";
        }else if(document.getElementById("spot7").innerHTML == "_")
        {
            document.getElementById("spot7").innerHTML = "O";
        }else if(document.getElementById("spot9").innerHTML == "_")
        {
            document.getElementById("spot9").innerHTML = "O";
        }else if(document.getElementById("spot4").innerHTML == "_")
        {
            document.getElementById("spot4").innerHTML = "O";
        }else if(document.getElementById("spot6").innerHTML == "_")
        {
            document.getElementById("spot6").innerHTML = "O";
        }else if(document.getElementById("spot2").innerHTML == "_")
        {
            document.getElementById("spot2").innerHTML = "O";
        }else if(document.getElementById("spot8").innerHTML == "_")
        {
            document.getElementById("spot8").innerHTML = "O";
        }
    }
a = "set";
}