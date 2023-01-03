import { apartmentHunting } from "./apartmentHunting"

test('finding the optimal block from the given list of contiguous blocks based on the given list of requirements', ()=>{
    const blocks = [
      {
        gym: false,
        school: true,
        store: false,
      },
      {
        gym: true,
        school: false,
        store: false,
      },
      {
        gym: true,
        school: true,
        store: false,
      },
      {
        gym: false,
        school: true,
        store: false,
      },
      {
        gym: false,
        school: true,
        store: true,
      },
    ];
    const reqs = ["gym", "school", "store"];
    expect(apartmentHunting(blocks,reqs)).toBe(3);
})