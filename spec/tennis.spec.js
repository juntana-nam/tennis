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

      sum = scoreB;

      }

  };

  this.echo = function(){
    return tmp;
  }
}


};

describe('Tennis game', function(){
  it('Should echo "Love - Love" when Score A and Score B = 0 on the game', function(){
    var tennis = new Tennis();
    tennis.start();
    tennis.findScore();
    expect(tennis.echo()).toEqual('Love - Love');
  });

  it('Should echo "Fifty - Love" when Score A = 15 on the game', function(){
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
  });
