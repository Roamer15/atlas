const apiKey = process.env.COUNTRIES_API_KEY

export async function getAllCountries() {
  try {
    const results = await fetch(
      `https://api.restcountries.com/countries/v5?pretty=1`,
      {headers: {'Authorization':`Bearer rc_live_2335bc093d02463cbfa8252603cf34af}`}}
    );
    console.log(results)
    // if (!results.ok) {
    //   throw new Error("Couldn't fetch data");
    // }
    const data = await results.json();
    console.log(data)
  } catch (error) {
    console.log(error)
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}

export async function getCountryById(id: string) {
  try {
    const results = await fetch(
      `https://api.restcountries.com/countries/v5&api=${apiKey}?id=${id}`,
    );
    if (!results.ok) {
      throw new Error("Couldn't fetch data for this ID");
    }
    const data = await results.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}

export async function getRegionById(id: string) {
  try {
    const results = await fetch(
      `https://api.restcountries.com/regions&api=${apiKey}?id=${id}`,
    );
    if (!results.ok) {
      throw new Error("Couldn't fetch data for this ID");
    }
    const data = await results.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}
