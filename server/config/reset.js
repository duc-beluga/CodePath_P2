import { pool } from '../config/database.js'
import './dotenv.js'
import champData from '../data/champs.js'


const createChampsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS champs;

        CREATE TABLE IF NOT EXISTS champs (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            backstory TEXT NOT NULL,
            attackDamage INT NOT NULL,
            health INT NOT NULL,
            specialAttack VARCHAR(255) NOT NULL
        )
    `
    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 champs table created successfully')
    } catch (err) {
        console.error('⚠️ error creating champs table', err)
    }
}

const seedChampsTable = async () => {
    await createChampsTable()
    
    champData.forEach((champ) => {
        const insertQuery = {
          text: 'INSERT INTO champs (name, image, backstory, attackDamage, health, specialAttack) VALUES ($1, $2, $3, $4, $5, $6)'
        }
    
        const values = [
            champ.name,
            champ.image,
            champ.backstory,
            champ.attackDamage,
            champ.health,
            champ.specialAttack,
        ]
    
        pool.query(insertQuery, values, (err, res) => {
          if (err) {
            console.error('⚠️ error inserting champ', err)
            return
          }
          console.log(`✅ ${champ.name} added successfully`)
        })
      })
}

seedChampsTable()