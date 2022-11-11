/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('news').del()
  await knex('news').insert([
    {
      id: 1,
      title: 'Local Man not happy with code he copy-pasted',
      content: 'generalised badmouthing of ahmad, you get the idea',
    },
    {
      id: 2,
      title: 'Woman laid low by capital letters, yet again.',
      content: 'in a nationwide tragedy, shit happens.',
    },
  ])
}
