const groupConversationByDate=(conversationList)=>{

const monthObj = {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December'
    }

    const groupByDate = conversationList?.reduce((acc, item) => {
        const dateStr = item?.createdAt?.split("T")[0];
        const inputDate = new Date(dateStr)
        const today = new Date()

        inputDate.setHours(0, 0, 0, 0)
        today.setHours(0, 0, 0, 0)

        const msPerDay = 1000 * 60 * 60 * 24
        const dayDiff = Math.floor((today - inputDate) / msPerDay)

        let label;
        if (dayDiff === 0) {
            label = 'Today'
        } else if (dayDiff === 1) {
            label = 'Yesterday'
        } else if (dayDiff <= 7) {
            label = 'Previous 7 Days'
        } else if (dayDiff <= 30) {
            label = 'Previous 30 Days'
        } else {
            label = monthObj[inputDate.getMonth() + 1]
        }

        if (!acc[label]) {
            acc[label] = []
        }

        acc[label].push(item)

        return acc
    }, {})

    return groupByDate

}

export default groupConversationByDate