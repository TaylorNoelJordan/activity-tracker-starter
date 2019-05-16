if(typeof module !== 'undefined') {
	User = require('../src/user');
	userData = require('../data/users');
	userSleepData = require('../data/sample-sleep');
};


class Sleep {
  constructor(userSleepData){
		this.userSleepData = userSleepData;
	
  }

  findUserSleepData(userId) {
  	return this.userSleepData.find(user => user.userID === userId)

	}

  findAvgHoursSlept(userId) {
  	const currentUser = this.findUserSleepData(userId);
  	const totalHours = currentUser.sleepData.map(item => item.hoursSlept)
  	const avgSleep = totalHours.reduce((a, b) => a += b, 0)/totalHours.length;
  	return avgSleep
  }

  findAvgSleepQuality(userId) {
  	const currentUser = this.findUserSleepData(userId);
  	const sleepQualityTotal = currentUser.sleepData.map(item => item.sleepQuality);
  	const avgQuality = sleepQualityTotal.reduce((a, b) => a += b, 0)/sleepQualityTotal.length;
  	return avgQuality
  }

  findHoursSleptByDay(userId, date) {
  	const currentUser = this.findUserSleepData(userId);
  	const findDate = currentUser.sleepData.find(item => item.date === date);
  	return findDate.hoursSlept
  }

  findSleepQualityByDay(userId, date) {
  	const currentUser = this.findUserSleepData(userId);
  	const findDate = currentUser.sleepData.find(item => item.date === date)
  	return findDate.sleepQuality
  }

  findHoursSleptByWeek(userId, date) {
  	const currentUser = this.findUserSleepData(userId);
  	const startDate = currentUser.sleepData.findIndex(item => item.date === date)
  	const weekOfSleep = currentUser.sleepData.slice(startDate, startDate+7).map(item => item.hoursSlept)
  	return weekOfSleep
  }

  findSleepQualityByWeek(userId, date) {
  	const currentUser = this.findUserSleepData(userId);
  	const startDate = currentUser.sleepData.findIndex(item => item.date === date)
  	const weekOfSleepQuality = currentUser.sleepData.slice(startDate, startDate+7).map(item => item.sleepQuality)
  	return weekOfSleepQuality
  }

  findAvgHoursSleptByWeek(userId, date) {
  	const currentUser = this.findUserSleepData(userId);
  	const startDate = currentUser.sleepData.findIndex(item => item.date === date);
  	const totalHours = currentUser.sleepData.slice(startDate, startDate+7).map(item => item.hoursSlept).reduce((a, b) => a +=b, 0);
  	const average = Number(totalHours/7).toFixed(2)
  	return parseFloat(average)

  }

};


if(typeof module !== 'undefined') {
module.exports = Sleep;
}