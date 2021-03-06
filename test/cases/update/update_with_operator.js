describe('Test update with operator option', function () {

    it('update with operator - +', function (done) {
        var price;
        con.select({
            from: "Products",
            where: {
                productId: 1
            }
        }).then(function (results) {
            price = results[0].price;
        }).catch(function (err) {
            done(err);
        });

        con.update({ in: "Products",
            set: {
                price: {
                    '+': 5
                }
            },
            where: {
                productId: 1
            }
        }).then(function (results) {
            expect(results).to.be.an('number').to.equal(1);
        }).catch(function (err) {
            done(err);
        });

        con.select({
            from: "Products",
            where: {
                productId: 1
            }
        }).then(function (results) {
            expect(results[0].price).to.be.an('number').to.equal(price + 5);
            done();
        }).catch(function (err) {
            done(err);
        });
    });

    it('update with operator - "-" ', function (done) {
        var price;
        con.select({
            from: "Products",
            where: {
                productId: 1
            }
        }).then(function (results) {
            price = results[0].price;
        }).catch(function (err) {
            done(err);
        });

        con.update({ in: "Products",
            set: {
                price: {
                    '-': 5
                }
            },
            where: {
                productId: 1
            }
        }).then(function (results) {
            expect(results).to.be.an('number').to.equal(1);
        }).catch(function (err) {
            done(err);
        });

        con.select({
            from: "Products",
            where: {
                productId: 1
            }
        }).then(function (results) {
            expect(results[0].price).to.be.an('number').to.equal(price - 5);
            done();
        }).catch(function (err) {
            done(err);
        });
    });

    it('update with operator - *', function (done) {
        var price;
        con.select({
            from: "Products",
            where: {
                productId: 1
            }
        }).then(function (results) {
            price = results[0].price;
        }).catch(function (err) {
            done(err);
        });
        con.update({ in: "Products",
            set: {
                price: {
                    '*': 5
                }
            },
            where: {
                productId: 1
            }
        }).then(function (results) {
            expect(results).to.be.an('number').to.equal(1);
        }).catch(function (err) {
            done(err);
        });

        con.select({
            from: "Products",
            where: {
                productId: 1
            }
        }).then(function (results) {
            expect(results[0].price).to.be.an('number').to.equal(price * 5);
            done();
        }).catch(function (err) {
            done(err);
        });
    });

    it('update with operator - *', function (done) {
        var price;
        con.select({
            from: "Products",
            where: {
                productId: 1
            }
        }).then(function (results) {
            price = results[0].price;
        }).catch(function (err) {
            done(err);
        });
        con.update({ in: "Products",
            set: {
                price: {
                    '/': 5
                }
            },
            where: {
                productId: 1
            }
        }).then(function (results) {
            expect(results).to.be.an('number').to.equal(1);
        }).catch(function (err) {
            done(err);
        });

        con.select({
            from: "Products",
            where: {
                productId: 1
            }
        }).then(function (results) {
            expect(results[0].price).to.be.an('number').to.equal(price / 5);
            done();
        }).catch(function (err) {
            done(err);
        });
    });

    it('update with operator - + : string concat', function (done) {
        var Name;
        con.select({
            from: "Products",
            where: {
                productId: 1
            }
        }).then(function (results) {
            Name = results[0].productName;
        }).catch(function (err) {
            done(err);
        });
        con.update({ in: "Products",
            set: {
                productName: {
                    '+': 'temp'
                }
            },
            where: {
                productId: 1
            }
        }).then(function (results) {
            expect(results).to.be.an('number').to.equal(1);
        }).catch(function (err) {
            done(err);
        });

        con.select({
            from: "Products",
            where: {
                productId: 1
            }
        }).then(function (results) {
            expect(results[0].productName).to.be.an('string').to.equal(Name + 'temp');
            done();
        }).catch(function (err) {
            done(err);
        });
    });

    it('update with wrong operator - #', function (done) {
        con.update({ in: "Products",
            set: {
                productName: {
                    '#': 'temp'
                }
            },
            where: {
                productId: 1
            }
        }).then(function (results) {
            expect(results).to.be.an('number').to.equal(1);
        }).catch(function (err) {
            var error = {
                "message": "Supplied value for column 'productName' have wrong data type",
                "type": "wrong_data_type"
            };
            expect(err).to.be.an('object').eql(error);
            done();
        });
    });
});