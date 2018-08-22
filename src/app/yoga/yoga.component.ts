import { Component, OnInit } from '@angular/core';
import { Yoga } from '../yoga.model';
import { YogaService } from '../yoga.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-yoga',
  templateUrl: './yoga.component.html',
  styleUrls: ['./yoga.component.css'],
  animations: []
})
export class YogaComponent implements OnInit {

 
  // yogas = [{
  //   title: "Yoga",
  //   content: "Joga to najstarsza gimnastyka świata. Jest praktykowana od wielu tysięcy lat, a jej najważniejszym źródłem są spisane między 3 a 6 wiekiem przed naszą erą Jogasutry autorstwa Patańdżalego, ajurwedyjskiego lekarza. Joga może być rozumiana na dwa sposoby. Może być postrzegana jako system światopoglądowy, filozofię czy nawet religię oraz jako aktywność ruchowa. W cywilizacji zachodniej, dużo częściej jogę kojarzy się z praktyką asan. Również i w naszym klubie, joga jest wolna od światopoglądu i jest nauczana tylko i wyłącznie jako aktywność fizyczna. Niezaprzeczalnym faktem jest jednak jej znamienny wpływ na jasność myślenia, uspokojenie umysłu i zharmonizowanie pracy narządów wewnętrznych.Praktyka asan – czyli pozycji jogi - ma charakter terapeutyczny. Ich wykonywanie przynosi ulgę narządowi ruchu i znacząco wpływa na witalność regularnie ćwiczącego. Spośród najbardziej znanych korzyści praktykowania jogi, należy wymienić:",
  //   point1: "spowolnienie procesów starzenia,",
  //   point2: "profilaktyka chorób kręgosłupa,",
  //   point3: "lepsze radzenie sobie ze stresem,",
  //   point4: "spokojny sen,",
  //   point5: "uspokojenie układu hormonalnego",
  //   point6: "wyższa tolerancja na obciążenie intelektualne",



  // }]
  yogas: Yoga[] = []
  private yogasSub: Subscription;

  constructor(public yogasService: YogaService) {}

  ngOnInit() {
    this.yogasService.getYogas();
    this.yogasSub = this.yogasService.getYogaUpdatedListener()
    .subscribe((yogas: Yoga[]) => {
        this.yogas = yogas;
  })

}
}
