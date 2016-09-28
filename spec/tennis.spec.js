function Tennis(){
  var scoreA;
  var scoreB;

  this.start = function(){
    scoreA = 0;
    scoreB = 0;
  }

  this.getScoreA = function(){
    if(scoreA === 0 || scoreA === 15){
      scoreA += 15;
    }
    else if(scoreA === 30 || scoreA === 40){
      scoreA += 10;
    }
  };

  this.getScoreB = function(){
    if(scoreB === 0 || scoreB === 15 ){
      scoreB += 15;
    }
    else
      scoreB += 10;
  };

  var sum = 0;
  var tmp = '';

  this.findScore = function(){
    sum = scoreA;
    for(var i = 0; i<2; i++){
      if(sum === 0){
        tmp += 'Love';
      }
      else if(sum === 15){
        tmp += 'Fifteen';
      }
      else if(sum === 30){
        tmp += 'Thirty';
      }
      else if(sum === 40){
        tmp += 'Forty';
      }
      else if(sum === 50 && i === 0){
        tmp = 'A Win the game';
        break
      }
      else if(sum === 50 && i === 1){
        tmp = 'B Win the game';
        break;
      }


      if( sum !== 50 && i === 0){
        tmp += ' - ';
      }
      sum = scoreB;

      }

  };

  this.echo = function(){
    return tmp;
  };
}


describe('Tennis game', function(){
  it('Should echo "Love - Love" when Score A and Score B = 0 on the game', function(){
    var tennis = new Tennis();
    tennis.start();
    tennis.findScore();
    expect(tennis.echo()).toEqual('Love - Love');
  });

  it('Should echo "Fifteen - Love" when Score A = 15 on the game', function(){
    var tennis = new Tennis();
    tennis.start();
    tennis.getScoreA();
    tennis.findScore();
    expect(tennis.echo()).toEqual('Fifteen - Love');
  });

  it('Should echo "Thirty - Love" when Score A = 30 on the game', function(){
    var tennis = new Tennis();
    tennis.start();
    tennis.getScoreA();
    tennis.getScoreA();
    tennis.findScore();
    expect(tennis.echo()).toEqual('Thirty - Love');
  });
  it('Should echo "Forty - Love" when Score A = 40 on the game', function(){
   var tennis = new Tennis();
   tennis.start();
   tennis.getScoreA();
   tennis.getScoreA();
   tennis.getScoreA();
   tennis.findScore();
   expect(tennis.echo()).toEqual('Forty - Love');
 });
 it('Should echo "Win the game" when Score A = 50 on the game', function(){
   var tennis = new Tennis();
   tennis.start();
   tennis.getScoreA();
   tennis.getScoreA();
   tennis.getScoreA();
   tennis.getScoreA();
   tennis.findScore();
   expect(tennis.echo()).toEqual('A Win the game');
 });
 it('Should echo Love - Fifteen when Score B = 15 on the game', function(){
    var tennis = new Tennis();
    tennis.start();
    tennis.getScoreB();
    tennis.findScore();
    expect(tennis.echo()).toEqual('Love - Fifteen');
  });
  it('Should echo Love - Thirty when Score B = 30 on the game', function(){
    var tennis = new Tennis();
    tennis.start();
    tennis.getScoreB();
    tennis.getScoreB();
    tennis.findScore();
    expect(tennis.echo()).toEqual('Love - Thirty');
  });
  it('Should echo Love - Forty when Score B = 40 on the game', function(){
    var tennis = new Tennis();
    tennis.start();
    tennis.getScoreB();
    tennis.getScoreB();
    tennis.getScoreB();
    tennis.findScore();
    expect(tennis.echo()).toEqual('Love - Forty');
  });
  it('Should echo "B Win the game" when Score B = 50 on the game', function(){
    var tennis = new Tennis();
    tennis.start();
    tennis.getScoreB();
    tennis.getScoreB();
    tennis.getScoreB();
    tennis.getScoreB();
    tennis.findScore();
    expect(tennis.echo()).toEqual('B Win the game');
  });
  it('Should echo "Fifty - Fifty" when Score A and Score B = 15 on the game', function(){
    var tennis = new Tennis();
    tennis.start();
    tennis.getScoreA();
    tennis.getScoreB();
    tennis.findScore();
    expect(tennis.echo()).toEqual('Fifteen - Fifteen');
  });
  it('Should echo "Thirty - Thirty" when Score A and Score B = 30 on the game', function(){
    var tennis = new Tennis();
    tennis.start();
    tennis.getScoreA();
    tennis.getScoreA();
    tennis.getScoreB();
    tennis.getScoreB();
    tennis.findScore();
    expect(tennis.echo()).toEqual('Thirty - Thirty');
  });


  });
