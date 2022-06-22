import connection from "./connection";

export const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `);
  
    return result[0][0];
};

export const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = '${name}'
    `);
  
    return result[0][0];
};

export const countActorsByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as "${gender}:" FROM Actor WHERE gender = "${gender}"
    `);

    return result[0][0];
};

export const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id);
};

export const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
      .delete()
      .where("id", id);
}; 

export const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT AVG(salary) as "Average salary ${gender}" FROM Actor WHERE gender = "${gender}"
    `);
  
    return result[0][0];
};

export const createActor = async (
    id: string,
    name: string,
    salary: number,
    dateOfBirth: Date,
    gender: string
  ): Promise<void> => {
    await connection
      .insert({
        id: id,
        name: name,
        salary: salary,
        birth_date: dateOfBirth,
        gender: gender,
      })
      .into("Actor");
};