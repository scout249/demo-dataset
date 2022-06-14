module.exports = function() {
    var faker = require("faker");
    var _ = require("lodash");
    return {

        user: _.times(10, function(n) {
            return {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                email: faker.internet.email(),
                role_id: faker.random.arrayElement(['superadmin', 'admin', 'collaborator', 'draft_writer', 'viewer']),
                group_ids: faker.random.number({min: 1, max: 5})
            };

        }),

        group: _.times(5, function(n) {
            return {
                name: faker.commerce.color() + '-' + faker.commerce.department(),
                smart_load: false
            };

        }),

        category: _.times(10, function(n) {
                return {
                    name: faker.company.companyName(0),
                };

		}),
			
        article: _.times(20, function(n) {
            return {
                name: faker.company.bsNoun() + faker.company.catchPhrase(),
                description: faker.lorem.sentence(),
                body: faker.lorem.paragraphs(),
                published: true,
                category_ids: faker.random.number({min: 1, max: 10})
            };

        })
            //, ...
    };
}