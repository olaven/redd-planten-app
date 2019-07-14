//
//  WebService.swift
//  planten
//
//  Created by Olav on 14/07/2019.
//  Copyright © 2019 olaven. All rights reserved.
//

import Foundation

class Webservice {
    
    func getDataPoints(completion: @escaping ([DataPoint]?) -> ()) {
        
        guard let url =
            URL(string: "http://phant.labben.org:8090/output/pjKMyaJ9adU9XKYolNoKfYeZz8L.json")
        else {
            fatalError("URL is not correct")
        }
        URLSession.shared.dataTask(with: url) { data, response, error in
            
            if let error = error {
                print(error.localizedDescription)
                completion(nil)
            } else if let data = data {
                
                let datapoints = try? JSONDecoder().decode([DataPoint].self, from: data)
                completion(datapoints)
            }
            
            }.resume()
        
    }
    
}
