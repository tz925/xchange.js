// eslint-disable-next-line
import chai from 'chai';
import xchange from '../../lib/xchange';

const should = chai.should();


describe('bitfinex apis', () => {
  describe('ticker', () => {
    it('completes successfully', (done) => {
      xchange.bitfinex.ticker({ symbol: 'BTCUSD' }, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('stats', () => {
    it('completes successfully', (done) => {
      xchange.bitfinex.stats({ symbol: 'BTCUSD' }, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('fundingBook', () => {
    it('completes successfully', (done) => {
      const params = {
        currency: 'USD',
        limitBids: 10,
        limitAsks: 10,
      };

      xchange.bitfinex.fundingBook(params, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('orderBook', () => {
    it('completes successfully', (done) => {
      const params = {
        symbol: 'BTCUSD',
        limitBids: 10,
        limitAsks: 10,
        group: 2,
      };

      xchange.bitfinex.orderBook(params, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('trades', () => {
    it('completes successfully', (done) => {
      const params = {
        symbol: 'BTCUSD',
        timestamp: '1472506126.0',
        limitTrades: 10,
      };

      xchange.bitfinex.trades(params, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('lends', () => {
    it('completes successfully', (done) => {
      const params = {
        currency: 'USD',
        timestamp: '1472506126.0',
        limitLends: 10,
      };

      xchange.bitfinex.lends(params, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('symbols', () => {
    it('completes successfully', (done) => {
      xchange.bitfinex.symbols(null, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });

  describe('symbols details', () => {
    it('completes successfully', (done) => {
      xchange.bitfinex.symbolsDetails(null, (err, response) => {
        if (!err) {
          console.log(response);
          should.exist(response);
          done();
        }
      });
    });
  });
});
