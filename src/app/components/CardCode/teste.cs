using System;
using System.Net.Http;
using System.Threading.Tasks;

class Program
{
    static async Task Main() => await MakeRequest();
    static async Task MakeRequest()
    {
        string url = "https://www.exemplo.com";
        using var client = new HttpClient();
        var response = await client.GetAsync(url);
        if (response.IsSuccessStatusCode)
            Console.WriteLine(await response.Content.ReadAsStringAsync());


        string url = "https://www.exemplo.com";
        using var client = new HttpClient();
        var request = new HttpRequestMessage(HttpMethod.Options, url);
        var response = await client.SendAsync(request);
        if (response.IsSuccessStatusCode)
            Console.WriteLine(await response.Content.ReadAsStringAsync());
    }
}
