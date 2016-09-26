describe('Tennis game', function(){
  it('Should echo "Love - Love" when starting the game', function(){
    var tennis = new Tennis(0,0);
    expect(tennis.echo()).toEqual('Love - Love');
  });
  });
