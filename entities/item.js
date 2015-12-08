function Item(date, person) {
	_date = date || new Date();
	_person = person;
	_kind = "holiday";
	hours = 0;

	item = {
		date: function (date) {
			if (date)
				_date = date;
			else
				return _date;
		},
		person: function (person) {
			if (person)
				_person = person;
			else
				return _person
		},
		kind: function (kind) {
			if (kind)
				_kind = kind;
			else
				return _kind
		},
		hours: function(hours) {
			if (hours)
				_hours = hours;
			else
				return _hours;
		}
	};

	return item;
};

module.exports = Item;