class Form 
{
    constructor() {}
  
    display()
    {
      var title = createElement('        ')
      title.html("                         ");
      title.position(   ,    );
      
      var input = createInput("     ");
      var button = createButton('      ');
     
      
      input.position(    ,   );
      button.position(   ,   );

      button.mousePressed(function()
                          {
                                .hide();
                                .hide();
  
                                var name =    .value();

                                playerCount=            +1;

                               player.updateName(                );
                               player.updateCount(           );

                                var greeting = createElement('   ');
                                greeting.html("Hello " +        );
                                greeting.position(  , );
                         });

    }
}
