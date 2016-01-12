function Item(date, person) {
	_insertDate = new Date();
	_date = date;
	_person = person;
	_kinds = {holiday:"holiday", permit:"permit"};
	_kind = _kinds.holiday;
	_hours = 0;
	

	item = {
		insertDate: _insertDate,
		date: _date,
		person: _person,
		kind: _kind,
		hours: _hours,		
	
		kinds: _kinds,
	
		setDate: function (date) {
			_date = date;
		},
		
		setPerson: function (person) {
			_person = person;
		},
		
		setKind: function (kind) {			
			_kind = kind;
		},
		
		setHours: function(hours) {
			_hours = hours;			
		}
	};

	return item;
};

module.exports = Item;