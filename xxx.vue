new Vue({
  el: '#app',
  data: () => ({
    dark: false,
    vertical: false,
    events: [],
    eventColor: {},
    dateRange: [],
    dateRangePrevious: [],
    pickerPage1: null,
    pickerPage2: null,
    pickerPage1Adjusted: false,
    pickerPage2Adjusted: false,
    shadeAccent: true
  }),
  computed: {
    dates: {
      get() {
        if (!this.dateRange.length) {
          this.dateRange = this.getDefaultDates()
          this.render()
        }
        return this.dateRange
      },
      set(value) {
        if (value.length) {
          if (value.length == 2) {
            this.dateRange = value
          } else {
            let difference = []
            value.length == 1 ? difference = this.arrayDifference(this.dateRangePrevious, value) : difference = this.arrayDifference(value, this.dateRange)
            if (difference.length) {
              this.dateRange = difference
            }
          }
        }
        this.render()
        this.dateRangePrevious = this.dateRange
      }
    },
    valid: function () {
      return this.dates.length === 2
    }
  },
  methods: {
    render () {
      this.events = this.getDateRange(this.dates)
      this.eventColor = this.buildEventColors(this.events)
    },
    addDaysToDate(date, days) {
      d = new Date(date)
      d.setDate(d.getDate() + days)
      return d
    },
    formatDate(date) {
      return date.toISOString().split('T')[0]
    },
    buildEventColors(range) {
      let colors = {}
      for (let i = 0; i < range.length; i++) {
        let accentShade = ''
        this.shadeAccent ? (this.dark ? accentShade = 'darken-2' : accentShade = 'lighten-2') : accentShade = ''
        colors[range[i]] = 'accent ' + accentShade + ' v-date-picker-table__event'
        if (i === 0) {
            colors[range[i]] += ' v-date-picker-table__event--start'
        }
        if (i === range.length - 1) {
            colors[range[i]] += ' v-date-picker-table__event--end'
        }
      }
      return colors
    },
    getDateRange(dates) {
      let date1 = new Date(dates[0])
      let date2 = new Date(dates[dates.length - 1])
      let cur = new Date(Math.min(date1, date2)), range = []
      while (cur <= Math.max(date1, date2)) {
        range.push(this.formatDate(new Date(cur)))
        cur.setDate(cur.getDate() + 1)
      }
      return range;
    },
    getDefaultDates() {
      let today = new Date()
      return [
        this.formatDate(today),
        this.formatDate(this.addDaysToDate(today, 1))
      ]
    },
    setDefaultDates() {
      this.dateRange = this.getDefaultDates()
      this.render()
      this.bringDateIntoView()
    },
    clearDates() {
      this.dateRange = []
    },
    arrayDifference(array1, array2) {
      return array1.filter(function(i) {
        return array2.indexOf(i) < 0
      })
    },
    parsePickerPage(date) {
      let dateParts = date.split('-')
      return {
        year: parseInt(dateParts[0]),
        month: parseInt(dateParts[1])
      }
    },
    increasePickerPage(pickerPage) {
      pickerPage.month == 12 ? (pickerPage.year++, pickerPage.month = 1) : pickerPage.month++
      return pickerPage
    },
    decreasePickerPage(pickerPage) {
      pickerPage.month == 1 ? (pickerPage.year--, pickerPage.month = 12) : pickerPage.month--
      return pickerPage
    },
    pickerPageToString(pickerPage) {
      pickerPage.month < 10 ? pickerPage.month = '0' + pickerPage.month.toString() : pickerPage.month = pickerPage.month.toString()
      return pickerPage.year.toString() + '-' + pickerPage.month
    },
    bringDateIntoView() {
      if (this.dateRange.length > 0) {
        this.pickerPage1 = this.pickerPageToString(this.parsePickerPage(this.dateRange[0]))
      }
    }
  },
  watch: {
    dark (value) {
      this.render()
    },
    shadeAccent (value) {
      this.render()
    },
    pickerPage1 (value) {
      if (!this.pickerPage1Adjusted) {
        this.pickerPage2Adjusted = true
        this.pickerPage2 = this.pickerPageToString(this.increasePickerPage(this.parsePickerPage(value)))
      }
      this.pickerPage1Adjusted = false
    },
    pickerPage2 (value) {
      if (!this.pickerPage2Adjusted) {
        this.pickerPage1Adjusted = true
        this.pickerPage1 = this.pickerPageToString(this.decreasePickerPage(this.parsePickerPage(value)))
      }
      this.pickerPage2Adjusted = false
    }
  }
})
