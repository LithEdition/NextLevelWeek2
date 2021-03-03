module.exports = async function (db, { proffyValues, classValues, classScheduleValues }) {

    insertedProffy = await db.run(`

        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValues.name}",
            "${proffyValues.avatar}",
            "${proffyValues.whatsapp}",
            "${proffyValues.bio}"
        );
    `)

    const proffy_id = insertedProffy.lastID

    const insertedClass = await db.run(`
    INSERT INTO classes (
        subject,
        cost,
        proffy_id
    ) VALUES (
        "${classValues.subject}",
        "${classValues.cost}",
        "${proffy_id}"
    );
    `)

    const class_id = insertedClass.lastID

    const insertedAllClassScheduleValues = classScheduleValues.map(value => {

        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to    
            ) VALUES (
                "${class_id}",
                "${value.weekday}",
                "${value.time_from}",
                "${value.time_to}"
            )
        `)
    })

    await Promise.all(insertedAllClassScheduleValues)
}