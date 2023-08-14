import {pool} from '../db.js'
export const ping = async (req,res) => {
    const [consulta] = await pool.query('SELECT 1+1 AS result')
    res.json(consulta[0])
}