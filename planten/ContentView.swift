//
//  ContentView.swift
//  planten
//
//  Created by Olav on 14/07/2019.
//  Copyright © 2019 olaven. All rights reserved.
//

import SwiftUI

struct ContentView : View {
    
    
    init() {
        Webservice().getDataPoints {
            print($0)
        }
    }
    
    var body: some View {
        VStack {
            header
            Divider() // Just add a line.
            list
        }
    }
}

var header: some View {
    
    Text("Nå: 24")
        .bold()
        .font(.system(size: 55, design: .monospaced))
        .padding(5)
}

var list: some View {
    
    List(0..<5) { item in
        Text("12.12 - 44")
            .bold()
            .font(.system(size: 15, design: .monospaced))
    }
}
