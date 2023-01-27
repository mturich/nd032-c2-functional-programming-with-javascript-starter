// In this challenge, the promise will resolve with a given data set.
// Create a promise chain of four steps to do the following

// Step 1: Return only the unread alerts, if there are none, trigger an error that says there are no unread alerts
// Step 2: If the alert is a system alert, call the printSystemAlert function on it and remove it from the list
// Step 3: Create a console.error message for the critical alerts that prints the alert message, if there are no ciritical alerts, do nothing and proceed to step 4
// Step 4: Console log all other types of alerts with the message, severity, and type properties

const alerts = [
   {
      type: 'system',
      severity: 'critical',
      timestamp: '',
      message: 'System has experienced an error and must be restarted',
      user_id: null,
      short_code: 'VDN877',
      readStatus: true,
   },
   {
      type: 'users',
      severity: 'critical',
      timestamp: '',
      message: 'Unauthorized access to the system has been logged',
      user_id: null,
      short_code: 'VDN077',
      readStatus: false,
   },
   {
      type: 'system',
      severity: 'informational',
      timestamp: '',
      message: 'There are new updates available',
      user_id: null,
      short_code: 'VDN827',
      readStatus: false,
   },
   {
      type: 'users',
      severity: 'warning',
      timestamp: '',
      message: 'Some users on this system have not updated their passwords',
      user_id: null,
      short_code: 'HDN877',
      readStatus: false,
   },
   {
      type: 'users',
      severity: 'warning',
      timestamp: '',
      message: 'Some users on this system have not updated their username',
      user_id: null,
      short_code: 'HDN878',
      readStatus: false,
   },
]

// Step 1: Return only the unread alerts, if there are none, trigger an error that says there are no unread alerts
// Step 2: If the alert is a system alert, call the printSystemAlert function on it and remove it from the list
// Step 3: Create a console.error message for the critical alerts that prints the alert message, if there are no ciritical alerts, do nothing and proceed to step 4
// Step 4: Console log all other types of alerts with the message, severity, and type properties

const printSystemAlert = alert => {
   console.info(
      alert,
      `This is a ${alert.severity} system wide alert: ${alert.message}`
   )
}

new Promise((resolve, reject) => {
   resolve(alerts)
})
   .then(data => {
      const readStatusArray = data.filter(el => el.readStatus === false)
      if (readStatusArray.length === 0) throw new Error('no unread alerts')
      else return readStatusArray
   })
   .then(data => {
      console.log('Step 2', '\n')
      const systemAlertArray = data.filter(el => el.type === 'system')
      if (systemAlertArray.length === 0) {
         return data
      } else {
         systemAlertArray.forEach(el => printSystemAlert(el))
         return data.filter(el => el.type !== 'system')
      }
   })
   .then(data => {
      console.log('\n', 'Step 3', '\n')
      const criticalAlertsArr = data.filter(el => el.severity === 'critical')
      if (criticalAlertsArr.length === 0) return data
      else
         criticalAlertsArr.forEach(el => {
            console.error(el.message)
         })
      return data.filter(el => el.severity !== 'critical')
   })
   .then(data => {
      console.log('\n', 'Step 4', '\n', data)
      const toPrint = data.map(({ message, type, severity }) => ({
         message,
         type,
         severity,
      }))
      toPrint.forEach((el,i) => console.log(`error message ${i+1} :`,el))
   })
   .catch(error => {
      switch (error.message) {
         case 'no unread alerts':
            console.log('There are no unread errors!')
      }
   })
console.clear()
